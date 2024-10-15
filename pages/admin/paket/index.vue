<template>
    <div class="table-container ml-3 mr-3">
      <h1 class="h3 mb-2 text-gray-800">Tabel Paket</h1>
      <p class="mb-4">
        DataTables adalah plugin pihak ketiga yang digunakan untuk membuat tabel demo di bawah ini.
        Untuk informasi lebih lanjut tentang DataTables, silakan kunjungi
        <a target="_blank" href="https://datatables.net">dokumentasi resmi DataTables</a>.
      </p>
  
      <button class="btn btn-primary mb-3" @click="openCreateModal">
        Tambah Paket
      </button>
  
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Data Paket</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped table-bordered mt-3 mb-3" id="dataTable" width="100%" cellspacing="0">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Nama Paket</th>
                  <th>Jenis Paket</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="packageItem in packages" :key="packageItem.id">
                  <td>{{ packageItem.id }}</td>
                  <td>{{ packageItem.name }}</td>
                  <td>{{ packageItem.packageType.name }}</td> <!-- Display package type name -->
                  <td>{{ packageItem.description }}</td>
                  <td>{{ packageItem.price }}</td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-primary me-2" @click="openEditModal(packageItem)">Edit</button>
                    <button class="btn btn-sm btn-danger" @click="deleteItem(packageItem.id)">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <!-- Modal for Adding/Editing Package -->
      <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditing ? 'Edit Paket' : 'Tambah Paket' }}</h5>
              <button type="button" class="close" @click="closeModal">&times;</button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="isEditing ? updatePackage() : createPackage()">
                <div class="form-group">
                  <label for="name">Nama Paket</label>
                  <input type="text" id="name" v-model="newPackage.name" class="form-control" placeholder="Masukkan nama paket" required />
                </div>
                <div class="form-group">
                  <label for="package_type">Jenis Paket</label>
                  <select id="package_type" v-model="newPackage.packagetype_id" class="form-control" required>
                    <option v-for="packageType in packageTypes" :key="packageType.id" :value="packageType.id">
                      {{ packageType.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="description">Deskripsi</label>
                  <textarea id="description" v-model="newPackage.description" class="form-control" placeholder="Masukkan deskripsi" required></textarea>
                </div>
                <div class="form-group">
                  <label for="price">Harga</label>
                  <input type="number" id="price" v-model="newPackage.price" class="form-control" placeholder="Masukkan harga" required />
                </div>
  
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Simpan' }}</button>
                  <button type="button" class="btn btn-secondary" @click="closeModal">Kembali</button>
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
  import Swal from 'sweetalert2';
  import $ from 'jquery';
  import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
  import 'datatables.net-bs4';
  
  const apiBase = useRuntimeConfig().public.apiBase;
  
  const packages = ref([]);
  const packageTypes = ref([]);
  const showModal = ref(false);
  const isEditing = ref(false);
  const newPackage = ref({
    id: null,
    name: '',
    packagetype_id: null,
    description: '',
    price: '',
  });
  
  const fetchPackages = async () => {
    try {
      const response = await fetch(`${apiBase}/api/package`);
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error('Failed to fetch packages');
      }
  
      packages.value = responseData.data;
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };
  
  const fetchPackageTypes = async () => {
    try {
      const response = await fetch(`${apiBase}/api/type`);
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error('Failed to fetch package types');
      }
  
      packageTypes.value = responseData.data;
  
      await nextTick();
      const dataTable = $('#dataTable').DataTable();
      if (dataTable) {
        dataTable.destroy();
      }
  
      $('#dataTable').DataTable({
        paging: true,
        searching: true,
        info: true,
        lengthChange: true,
        columnDefs: [{ searchable: true, targets: '_all' }],
        language: { search: 'Search:', lengthMenu: 'Show _MENU_ entries' },
      });
    } catch (error) {
      console.error('Error fetching package types:', error);
    }
  };
  
  const openCreateModal = () => {
    newPackage.value = { name: '', packagetype_id: null, description: '', price: '' };
    isEditing.value = false;
    showModal.value = true;
  };
  
  const openEditModal = (packageItem) => {
    newPackage.value = { ...packageItem };
    isEditing.value = true;
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const createPackage = async () => {
    try {
      const response = await fetch(`${apiBase}/api/package`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackage.value),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create package');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Paket berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      closeModal();
      fetchPackages();
    } catch (error) {
      console.error('Error creating package:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menambahkan Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  const updatePackage = async () => {
    try {
      const response = await fetch(`${apiBase}/api/package/${newPackage.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackage.value),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update package');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Paket berhasil diperbarui.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      closeModal();
      fetchPackages();
    } catch (error) {
      console.error('Error updating package:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat memperbarui Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${apiBase}/api/package/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete package');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Paket berhasil dihapus.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menghapus Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  onMounted(() => {
    fetchPackages();
    fetchPackageTypes();
  });
  
  definePageMeta({
    layout: 'admin',
  });
  </script>
  