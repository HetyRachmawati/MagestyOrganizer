<template>
  <div class="table-container ml-3 mr-3">
    <h1 class="h3 mb-2 text-gray-800">Tabel Tim</h1>
    <p class="mb-4">
      DataTables adalah plugin pihak ketiga yang digunakan untuk membuat tabel demo di bawah ini.
      Untuk informasi lebih lanjut tentang DataTables, silakan kunjungi
      <a target="_blank" href="https://datatables.net">dokumentasi resmi DataTables</a>.
    </p>

    <button class="btn btn-primary mb-3" @click="openCreateModal">
      Tambah Anggota Tim
    </button>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Data Anggota Tim</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped table-bordered mt-3 mb-3" id="dataTable" width="100%" cellspacing="0">
            <thead class="thead-light">
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Posisi</th>
                <th>Nomor Telepon</th>
                <th>Alamat</th>
                <th>Gambar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teamMember in teamMembers" :key="teamMember.id">
                <td>{{ teamMember.id }}</td>
                <td>{{ teamMember.name }}</td>
                <td>{{ teamMember.position?.name || 'Posisi tidak ada' }}</td> 
                <td>{{ teamMember.phone_number }}</td>
                <td>{{ teamMember.address }}</td>
                <td>
                  <img v-if="teamMember.image" :src="teamMember.image" alt="Team Member" style="width: 50px; height: auto;">
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-primary me-2" @click="openEditModal(teamMember)">Edit</button>
                  <button class="btn btn-sm btn-danger" @click="deleteItem(teamMember.id)">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="showCreateModal" class="modal fade show" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tambah Anggota Tim</h5>
            <button type="button" class="close" @click="closeCreateModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createTeamMember">
              <div class="form-group">
                <label for="name">Nama</label>
                <input type="text" id="name" v-model="newTeamMember.name" class="form-control" placeholder="Masukkan nama" required />
              </div>
              <select id="position" v-model.number="newTeamMember.position_id" class="form-control" required>
                <option disabled value="">Pilih posisi</option>
                <option v-for="position in positions" :key="position.id" :value="position.id">
                  {{ position.position }} <!-- Sesuaikan dengan key dari respons API -->
                </option>
              </select>


              <div class="form-group">
                <label for="phone_number">Nomor Telepon</label>
                <input type="text" id="phone_number" v-model="newTeamMember.phone_number" class="form-control" placeholder="Masukkan nomor telepon" required />
              </div>

              <div class="form-group">
                <label for="address">Alamat</label>
                <input type="text" id="address" v-model="newTeamMember.address" class="form-control" placeholder="Masukkan alamat" required />
              </div>

              <div class="form-group">
                <label for="image">Gambar</label>
                <input type="file" id="image" @change="onImageChange" class="form-control" />
              </div>

              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Simpan</button>
                <button type="button" class="btn btn-secondary" @click="closeCreateModal">Kembali</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRuntimeConfig } from '#app';
import Swal from 'sweetalert2';
import $ from 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import 'datatables.net-bs4';

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const positions = ref([]);
const teamMembers = ref([]);
const showCreateModal = ref(false); 
const newTeamMember = ref({ name: '', position_id: '', phone_number: '', address: '', image: null });

const fetchTeamMembers = async () => {
  try {
    const response = await fetch(`${apiBase}/api/team`);
    const responseData = await response.json();

    console.log('Team Members Response:', responseData); // Tambahkan log ini

    if (!response.ok || responseData.status !== 'success') {
      throw new Error('Gagal mengambil data tim');
    }

    teamMembers.value = responseData.data;

    console.log('Team Members:', teamMembers.value); // Pastikan data posisi muncul di sini

    await nextTick(() => {
      if ($.fn.dataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().destroy();
      }
      $('#dataTable').DataTable();
    });
  } catch (error) {
    Swal.fire('Error', 'Gagal mengambil data tim. Silakan coba lagi.', 'error');
  }
};


const fetchPositions = async () => {
  try {
    console.log('Fetching positions...');
    const response = await fetch(`${apiBase}/api/position`);
    const responseData = await response.json();

    console.log('Positions Response:', responseData); // Debug respons

    if (!response.ok || responseData.status !== 'success') {
      throw new Error('Gagal mengambil data posisi');
    }

    positions.value = responseData.data.map(pos => ({
      ...pos,
      id: Number(pos.id) // Pastikan ID berupa angka
    }));
    console.log('Positions Loaded:', JSON.stringify(positions.value, null, 2)); 

    console.log('Positions assigned:', positions.value); // Pastikan data terisi
  } catch (error) {
    console.error('Error fetching positions:', error);
  }
};


const openCreateModal = async () => {
  await fetchPositions(); // Ambil data posisi
  console.log('Positions sebelum modal terbuka:', positions.value);

  newTeamMember.value = {
    name: '',
    position_id: '',
    phone_number: '',
    address: '',
    image: null
  };

  showCreateModal.value = true; // Buka modal setelah data posisi ada
};


const closeCreateModal = () => {
  showCreateModal.value = false;
};

const onImageChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    newTeamMember.value.image = file;
  }
};

const createTeamMember = async () => {
  try {
    console.log('New Team Member:', newTeamMember.value); // Periksa ID posisi

    const formData = new FormData();
    formData.append('name', newTeamMember.value.name);
    formData.append('position_id', newTeamMember.value.position_id);
    formData.append('phone_number', newTeamMember.value.phone_number);
    formData.append('address', newTeamMember.value.address);

    if (newTeamMember.value.image) {
      formData.append('image', newTeamMember.value.image);
    }

    const response = await fetch(`${apiBase}/api/team`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Gagal menambahkan anggota tim');
    }

    await fetchTeamMembers();
    Swal.fire('Sukses', 'Anggota tim berhasil ditambahkan!', 'success');
    closeCreateModal();
  } catch (error) {
    Swal.fire('Error', 'Gagal menambahkan anggota tim.', 'error');
  }
};

onMounted(() => {
  fetchTeamMembers();
});
onMounted(() => {
  fetchPositions();
});

definePageMeta({
  layout: 'admin'
});
</script>

<style scoped>
.table-container {
  margin-top: 20px;
}
</style>
