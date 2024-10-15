<template>
    <div class="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
      <!-- Left Side: Checkout Form -->
      <div class="lg:col-span-2">
        <!-- Checkout Title -->
        <h1 class="text-3xl font-bold mb-6 fade-in">Booking Package</h1>
  
        <!-- Customer Information -->
        <section class="bg-white p-6 rounded-lg shadow-md mb-8 fade-in">
          <h2 class="text-xl font-semibold mb-6">Customer Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="name" placeholder="Write your complete name" class="w-full border border-gray-300 rounded-md p-3 transition-all duration-300 focus:border-purple-600 focus:shadow-md" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" id="email" placeholder="Write your complete email" class="w-full border border-gray-300 rounded-md p-3 transition-all duration-300 focus:border-purple-600 focus:shadow-md" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
              <input type="text" id="phone" placeholder="Let us know your number" class="w-full border border-gray-300 rounded-md p-3 transition-all duration-300 focus:border-purple-600 focus:shadow-md" />
            </div>
            <div>
              <label for="date" class="block text-sm font-medium mb-1">Started At</label>
              <input type="date" id="date" class="w-full border border-gray-300 rounded-md p-3 transition-all duration-300 focus:border-purple-600 focus:shadow-md" />
            </div>
          </div>
          <p class="mt-4 text-sm text-green-600">Angga X is protecting your privacy better</p>
        </section>
  
        <!-- Payment Details -->
        <section class="bg-white p-6 rounded-lg shadow-md mb-8 fade-in">
          <h2 class="text-xl font-semibold mb-6">Payment Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>Package Quantity</div>
            <div class="text-right md:text-left">1 Wedding Package</div>
            <div>Package Price (1x)</div>
            <div class="text-right md:text-left">Rp 560.300.493</div>
            <div>Country Tax 11%</div>
            <div class="text-right md:text-left">Rp 56.399.403</div>
            <div>Consultation & Insurance</div>
            <div class="text-right md:text-left">Rp 0 (Free)</div>
            <div class="font-bold text-xl">Grand Total Amount</div>
            <div class="text-right md:text-left font-bold text-purple-600 text-2xl">Rp 17.488.583.948</div>
          </div>
        </section>
  
        <!-- Payment Options -->
        <section class="bg-white p-6 rounded-lg shadow-md fade-in">
          <h2 class="text-xl font-semibold mb-6">Proceed Payment to</h2>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <button class="p-3 bg-purple-600 text-white rounded-full transform transition-transform duration-300 hover:scale-105">Bank Transfer</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="flex items-center">
              <img src="https://via.placeholder.com/24" alt="BCA" class="mr-2" />
              <span>BCA - Magesty Organizer 8008129839</span>
            </div>
          </div>
          <div class="mb-8">
            <label for="proof" class="block text-sm font-medium mb-2">Upload Proof of Payment</label>
            <input type="file" id="proof" class="w-full border border-gray-300 rounded-md p-3 transition-all duration-300 focus:border-purple-600 focus:shadow-md" />
          </div>
          <div class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
           <!-- NuxtLink for Save as a Wishlist -->
  <nuxt-link
    to="/wishlist"
    class="p-3 bg-gray-200 rounded-md transform transition-transform duration-300 hover:scale-105"
  >
    Save as a Wishlist
  </nuxt-link>

  <!-- NuxtLink for Confirm Payment -->
  <nuxt-link
    to="/booking/viewbooking"
    class="p-3 bg-purple-600 text-white rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700"
  >
    Confirm Payment
  </nuxt-link>
          </div>
        </section>
      </div>
  
      <!-- Right Side: Package Information -->
      <div>
        <section class="bg-white p-6 rounded-lg shadow-md mb-8 fade-in">
          <h2 class="text-xl font-semibold mb-4">Nikah Muda Abadi Pantai Bali Indah Sejahtera</h2>
          <img src="/img/g5.png" alt="Wedding Package" class="w-full rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105">
          <p class="text-purple-600 text-xl font-bold">Rp 193.131.312</p>
        </section>
  
        <!-- Happy Story -->
        <section class="bg-white p-6 rounded-lg shadow-md mb-8 fade-in">
          <h2 class="text-lg font-semibold mb-4">Happy Story</h2>
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/48" alt="Andriana Putri" class="rounded-full mr-4">
            <div>
              <p class="font-semibold">Andriana Putri</p>
              <p class="text-sm text-gray-500">Client</p>
            </div>
          </div>
          <p class="text-sm">Keren banget Magesty, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau! God.</p>
        </section>
  
        <!-- Wedding Organizer -->
        <section class="bg-white p-6 rounded-lg shadow-md fade-in">
          <h2 class="text-lg font-semibold mb-4">Wedding Organizer</h2>
          <div class="flex items-center">
            <img src="https://via.placeholder.com/48" alt="Dian Putri" class="rounded-full mr-4">
            <div>
              <p class="font-semibold">Dian Putri</p>
              <p class="text-sm text-gray-500">194 Packages</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckoutPackage',
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  
  /* Fade-in animation */
  .fade-in {
    opacity: 0;
    animation: fadeInAnimation 1s ease-in forwards;
  }
  
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  