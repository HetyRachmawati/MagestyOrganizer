<template>
  <div class="table-container ml-3 mr-3">
    <h1 class="h3 mb-2 text-gray-800">Tabel Posisi</h1>
    <p class="mb-4">
      DataTables adalah plugin pihak ketiga yang digunakan untuk membuat tabel demo di bawah ini.
      Untuk informasi lebih lanjut tentang DataTables, silakan kunjungi
      <a target="_blank" href="https://datatables.net">dokumentasi resmi DataTables</a>.
    </p>

    <!-- Button to open modal for adding new position -->
    <button class="btn btn-primary mb-3" @click="openCreateModal">
      Tambah Posisi
    </button>

    <!-- Modal for creating new position -->
    <div v-show="showCreateModal" class="modal show" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tambah Posisi Baru</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createPosition">
              <div class="form-group mb-3">
                <label for="position" class="form-label">Posisi</label>
                <input 
                  v-model="form.position" 
                  type="text" 
                  class="form-control" 
                  id="position" 
                  placeholder="Masukkan nama posisi" 
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="description" class="form-label">Deskripsi</label>
                <textarea 
                  v-model="form.description" 
                  class="form-control" 
                  id="description" 
                  placeholder="Masukkan deskripsi posisi" 
                  rows="4" 
                  required
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary me-2">Simpan</button>
                <button type="button" class="btn btn-secondary" @click="closeModal">Tutup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for editing position -->
    <div v-if="showEditModal" class="modal fade show" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Posisi</h5>
            <button type="button" class="btn-close" @click="closeEditModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updatePosition">
              <div class="form-group mb-3">
                <label for="position" class="form-label">Posisi</label>
                <input
                  v-model="form.position"
                  type="text"
                  class="form-control"
                  id="position"
                  placeholder="Masukkan nama posisi"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="description" class="form-label">Deskripsi</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  id="description"
                  placeholder="Masukkan deskripsi posisi"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">Update</button>
                <button type="button" class="btn btn-secondary ms-2" @click="closeEditModal">Tutup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Data Posisi</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped table-bordered mt-3 mb-3" id="dataTable" width="100%" cellspacing="0">
            <thead class="thead-light">
              <tr>
                <th>ID</th>
                <th>Posisi</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="position in positions" :key="position.id">
                <td>{{ position.id }}</td>
                <td>{{ position.position }}</td>
                <td>{{ position.description }}</td>
                <td class="text-center">
                  <button class="btn btn-sm btn-primary me-2" @click="openEditModal(position)">Edit</button>
                  <button class="btn btn-sm btn-danger" @click="deleteItem(position.id)">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
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

// Inisialisasi konfigurasi runtime
const config = useRuntimeConfig();

// State untuk menampilkan modal create dan edit serta menampung data posisi
const showCreateModal = ref(false);
const showEditModal = ref(false);
const form = ref({ position: '', description: '' });
const positions = ref([]); // State untuk menampung data posisi
let editId = ref(null);

// Fungsi membuka modal create
const openCreateModal = () => {
  showCreateModal.value = true;
};

// Fungsi membuka modal edit
const openEditModal = (position) => {
  form.value.position = position.position;
  form.value.description = position.description;
  editId.value = position.id;
  showEditModal.value = true;
};

// Fungsi menutup modal
const closeModal = () => {
  showCreateModal.value = false;
  resetForm();
};

const closeEditModal = () => {
  showEditModal.value = false;
  resetForm();
};

// Fungsi reset form modal
const resetForm = () => {
  form.value.position = '';
  form.value.description = '';
};

// Fungsi untuk mengambil data dari API
const fetchData = async () => {
  try {
    const { data } = await $fetch(`${config.public.apiBase}/api/position`);
    if (data && data.length > 0) {
      positions.value = data;
    }

    await nextTick();

    const dataTable = $('#dataTable').DataTable();
    if (dataTable) {
      dataTable.destroy(); // Pastikan DataTables di-destroy sebelum inisialisasi ulang
    }

    $('#dataTable').DataTable({
      paging: true,
      searching: true,
      info: true,
      lengthChange: true,
      columnDefs: [{ searchable: true, targets: '_all' }],
      language: { search: "Search:", lengthMenu: "Show _MENU_ entries" },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Gagal memuat data posisi.',
    });
  }
};

// Fungsi untuk membuat posisi baru
const createPosition = async () => {
  try {
    await $fetch(`${config.public.apiBase}/api/position`, {
      method: 'POST',
      body: form.value,
    });
    await Swal.fire({ title: 'Sukses!', text: 'Posisi baru berhasil ditambahkan.', icon: 'success', confirmButtonText: 'OK' });
    closeModal();
    await fetchData();
  } catch (error) {
  }
};

// Fungsi untuk mengupdate posisi
const updatePosition = async () => {
  try {
    await $fetch(`${config.public.apiBase}/api/position/${editId.value}`, {
      method: 'PUT',
      body: form.value,
    });
    await Swal.fire({ title: 'Sukses!', text: 'Posisi berhasil diperbarui.', icon: 'success', confirmButtonText: 'OK' });
    closeEditModal();
    await fetchData();
  } catch (error) {
    console.error('Gagal memperbarui posisi:', error);
    await Swal.fire({ title: 'Error!', text: 'Terjadi kesalahan saat memperbarui posisi.', icon: 'error', confirmButtonText: 'OK' });
  }
};

// Fungsi untuk menghapus posisi
const deleteItem = async (id) => {
  const result = await Swal.fire({
    title: 'Hapus Posisi',
    text: "Anda yakin ingin menghapus posisi ini?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, hapus!',
  });

  if (result.isConfirmed) {
    try {
      await $fetch(`${config.public.apiBase}/api/position/${id}`, { method: 'DELETE' });
      await Swal.fire('Dihapus!', 'Posisi berhasil dihapus.', 'success');
      await fetchData();
    } catch (error) {
      console.error('Gagal menghapus posisi:', error);
      await Swal.fire({ title: 'Error!', text: 'Terjadi kesalahan saat menghapus posisi.', icon: 'error', confirmButtonText: 'OK' });
    }
  }
};

// Inisialisasi saat komponen di-mount
onMounted(async () => {
  await fetchData();
});

definePageMeta({
  layout: 'admin'
});
</script>

<style scoped>
.modal.show {
  display: block;
}
.modal-backdrop {
  opacity: 0.5;
}
.modal-dialog {
  max-width: 500px;
}
.modal-header, .modal-body {
  padding: 1rem;
}
.btn {
  padding: 0.5rem 1rem;
}
.ms-2 {
  margin-left: 0.5rem;
}
</style>
