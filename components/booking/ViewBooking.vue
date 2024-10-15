<template>
  <div class="container mx-auto p-8 bg-gray-50 min-h-screen mt-20">
    <!-- Booking Title -->
    <h1 class="text-3xl font-bold mb-6">Booking Event</h1>

    <!-- Main Content -->
    <div class="grid grid-cols-3 gap-8">
      <!-- Left Side -->
      <div class="col-span-2 space-y-8">
        <!-- Customer Information -->
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-bold mb-4">Customer Information</h2>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label for="name" class="block font-medium">Full Name</label>
              <div class="flex items-center p-3 mt-1 bg-gray-100 rounded-md">
                <img src="https://via.placeholder.com/24" alt="User Icon" class="mr-2" />
                <span>Angga Risky</span>
              </div>
            </div>
            <div>
              <label for="email" class="block font-medium">Email Address</label>
              <div class="flex items-center p-3 mt-1 bg-gray-100 rounded-md">
                <img src="https://via.placeholder.com/24" alt="Email Icon" class="mr-2" />
                <span>anggarisky@bwa.com</span>
              </div>
            </div>
            <div>
              <label for="phone" class="block font-medium">Phone Number</label>
              <div class="flex items-center p-3 mt-1 bg-gray-100 rounded-md">
                <img src="https://via.placeholder.com/24" alt="Phone Icon" class="mr-2" />
                <span>082129849281</span>
              </div>
            </div>
            <div>
              <label for="date" class="block font-medium">Started At</label>
              <div class="flex items-center p-3 mt-1 bg-gray-100 rounded-md">
                <img src="https://via.placeholder.com/24" alt="Calendar Icon" class="mr-2" />
                <span>12/08/2030</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Wedding Bonus Package -->
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-bold mb-4">Wedding Bonus Package</h2>
          <!-- Content here if needed -->
        </section>

        <!-- Payment Details -->
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-bold mb-4">Payment Details</h2>
          <div class="grid grid-cols-2 gap-6">
            <div>Status Transaction</div>
            <div class="text-right text-green-600 font-bold">SUCCESS</div>
            <div>Package Quantity</div>
            <div class="text-right">1 Wedding Package</div>
            <div>Consultation & Insurance</div>
            <div class="text-right">Rp 0 (Free)</div>
            <div class="font-bold text-xl">Grand Total Amount</div>
            <div class="text-right font-bold text-purple-600 text-2xl">Rp 17.488.583.948</div>
          </div>
        </section>

        <!-- Proof of Payment -->
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-bold mb-4">Proof of Payment</h2>
          <div class="bg-gray-100 p-4 rounded-md">
            <p>BERHASIL</p>
            <p>20/03/2024 14:29:42</p>
            <p>3816560469960540</p>
            <p>PT KCC</p>
            <p>Angga risky seti</p>
            <p>TOTAL TAGIHAN Rp. 900,000.00</p>
            <p>Biaya Termasuk PPN (Bila ada)</p>
            <p>PT. BANK CENTRAL ASIA TBK, MENARA BCA - JAKARTA PUSAT</p>
            <p>NPWP : 001308446901000</p>
          </div>
        </section>

        <!-- Contact Customer Service Button -->
        <div class="flex justify-center">
          <button class="p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition transform hover:scale-105">
            Contact Customer Service
          </button>
        </div>
      </div>

      <!-- Right Side -->
      <div class="space-y-8">
        <!-- Wedding Package Information -->
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-bold mb-4">Nikah Muda Abadi Pantai Bali Indah Sejahtera</h2>
          <img src="https://via.placeholder.com/400x200" alt="Wedding Package Image" class="rounded-lg mb-4" />
          <div class="font-medium">
            <p>Wedding Organizer</p>
            <div class="flex items-center mt-2">
              <img src="https://via.placeholder.com/24" alt="Organizer Image" class="rounded-full mr-2" />
              <span>Dian Putri</span>
            </div>
            <p>194 Packages</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewBooking',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
