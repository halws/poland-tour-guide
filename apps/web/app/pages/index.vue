<script setup lang="ts">
import { ref } from 'vue'

// Nuxt i18n composables
const { locale, locales, setLocale } = useI18n()
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Language switcher state
const isDropdownOpen = ref(false)

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const changeLanguage = (lang: 'pl' | 'en' | 'ua' | 'ru') => {
  setLocale(lang)
  isDropdownOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.lang-switcher')) {
      isDropdownOpen.value = false
    }
  })
})

// SEO
useHead({
  title: 'Weekendowe Wycieczki z Warszawy - Interaktywny Przewodnik',
  meta: [
    { name: 'description', content: 'Twój interaktywny przewodnik po najciekawszych zakątkach Polski. Weekendowe wycieczki z Warszawy.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  htmlAttrs: {
    lang: locale.value,
    class: 'scroll-smooth'
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' }
  ]
})
</script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="hero-bg text-white shadow-lg">
      <div class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">{{ t('hero_title') }}</h1>
        <p class="text-lg md:text-xl text-gray-200">{{ t('hero_subtitle') }}</p>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white sticky top-0 z-50 shadow-md">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <ul class="flex justify-center space-x-4 md:space-x-8 py-4 overflow-x-auto">
          <li><a href="#trojmiasto" class="text-gray-600 hover:text-indigo-600 font-medium whitespace-nowrap">{{ t('nav_trojmiasto') }}</a></li>
          <li><a href="#mazury" class="text-gray-600 hover:text-indigo-600 font-medium whitespace-nowrap">{{ t('nav_mazury') }}</a></li>
          <li><a href="#malopolska" class="text-gray-600 hover:text-indigo-600 font-medium whitespace-nowrap">{{ t('nav_malopolska') }}</a></li>
          <li><a href="#lubelszczyzna" class="text-gray-600 hover:text-indigo-600 font-medium whitespace-nowrap">{{ t('nav_lubelszczyzna') }}</a></li>
          <li><a href="#dolny-slask" class="text-gray-600 hover:text-indigo-600 font-medium whitespace-nowrap">{{ t('nav_dolny_slask') }}</a></li>
        </ul>
        
        <!-- Language Switcher -->
        <div class="relative lang-switcher">
          <button @click="toggleDropdown" class="flex items-center text-gray-600 hover:text-indigo-600 font-medium p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 8.5h2.489c.174.782.282 1.623.312 2.5H1.018a6.958 6.958 0 0 0-.656-2.5zM11.91 4h1.835a7.024 7.024 0 0 0-3.072-2.472 6.696 6.696 0 0 1 .597.933A9.266 9.266 0 0 1 11.91 4zm-.869 3.5h2.49a6.958 6.958 0 0 0 .656-2.5H12.18c-.174.782-.282 1.623-.312 2.5zM8.5 1.077V4H10.855c.138-.386.295-.744.468-1.068.552-1.035 1.218-1.65 1.887-1.855zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068z"/>
            </svg>
            <span class="mx-1">{{ locale.toUpperCase() }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <div v-show="isDropdownOpen" class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
            <a href="#" @click.prevent="changeLanguage('pl')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Polski</a>
            <a href="#" @click.prevent="changeLanguage('en')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
            <a href="#" @click.prevent="changeLanguage('ua')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Українська</a>
            <a href="#" @click.prevent="changeLanguage('ru')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Русский</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-4 md:p-8">

      <!-- Destination: Trójmiasto -->
      <section id="trojmiasto" class="mb-16 scroll-mt-24">
        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-indigo-700 mb-6">{{ t('trojmiasto_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-semibold mb-4">{{ t('plan_title_3d') }}</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg">{{ t('trojmiasto_day1_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('trojmiasto_day1_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Fontanna+Neptuna+Gdańsk" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day1_loc1') }}
                    </a>
                    {{ t('trojmiasto_day1_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Żuraw+Gdańsk" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day1_loc2') }}
                    </a>{{ t('trojmiasto_day1_desc_3') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Muzeum+II+Wojny+Światowej" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day1_loc3') }}
                    </a>{{ t('trojmiasto_day1_desc_4') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Europejskie+Centrum+Solidarności" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day1_loc4') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('trojmiasto_day2_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('trojmiasto_day2_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Westerplatte" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day2_loc1') }}
                    </a>{{ t('trojmiasto_day2_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Molo+w+Sopocie" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day2_loc2') }}
                    </a>{{ t('trojmiasto_day2_desc_3') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Skwer+Kościuszki+Gdynia" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day2_loc3') }}
                    </a>{{ t('trojmiasto_day2_desc_4') }}
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('trojmiasto_day3_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('trojmiasto_day3_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Klif+Orłowski+Gdynia" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('trojmiasto_day3_loc1') }}
                    </a>{{ t('trojmiasto_day3_desc_2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-indigo-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4">{{ t('summary_title') }}</h3>
              <ul class="space-y-3 text-gray-700">
                <li><strong>{{ t('summary_distance') }}</strong>{{ t('trojmiasto_distance') }}</li>
                <li><strong>{{ t('summary_time') }}</strong>{{ t('trojmiasto_time') }}</li>
                <li><strong>{{ t('summary_character') }}</strong>{{ t('trojmiasto_character') }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6 mb-4">{{ t('taste_title') }}</h3>
              <p class="text-gray-700">{{ t('trojmiasto_taste') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Destination: Mazury -->
      <section id="mazury" class="mb-16 scroll-mt-24">
        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-teal-700 mb-6">{{ t('mazury_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-semibold mb-4">{{ t('plan_title_3d') }}</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg">{{ t('mazury_day1_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('mazury_day1_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Wioska+Żeglarska+Mikołajki" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day1_loc1') }}
                    </a>{{ t('mazury_day1_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Jezioro+Śniardwy" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day1_loc2') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('mazury_day2_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('mazury_day2_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Twierdza+Boyen+Giżycko" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day2_loc1') }}
                    </a>{{ t('mazury_day2_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Most+Obrotowy+Giżycko" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day2_loc2') }}
                    </a>{{ t('mazury_day2_desc_3') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Park+Dzikich+Zwierząt+Kadzidłowo" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day2_loc3') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('mazury_day3_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('mazury_day3_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=rzeka+Krutynia" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('mazury_day3_loc1') }}
                    </a>.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-teal-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4">{{ t('summary_title') }}</h3>
              <ul class="space-y-3 text-gray-700">
                <li><strong>{{ t('summary_distance') }}</strong>{{ t('mazury_distance') }}</li>
                <li><strong>{{ t('summary_time') }}</strong>{{ t('mazury_time') }}</li>
                <li><strong>{{ t('summary_character') }}</strong>{{ t('mazury_character') }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6 mb-4">{{ t('taste_title_mazury') }}</h3>
              <p class="text-gray-700">{{ t('mazury_taste') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Destination: Małopolska -->
      <section id="malopolska" class="mb-16 scroll-mt-24">
        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-red-700 mb-6">{{ t('malopolska_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-semibold mb-4">{{ t('plan_title_4d') }}</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg">{{ t('malopolska_day1_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('malopolska_day1_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Kazimierz+Kraków" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day1_loc1') }}
                    </a>{{ t('malopolska_day1_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Stara+Synagoga+Kraków" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day1_loc2') }}
                    </a>{{ t('malopolska_day1_desc_3') }}
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('malopolska_day2_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('malopolska_day2_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Zamek+Królewski+na+Wawelu" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day2_loc1') }}
                    </a>{{ t('malopolska_day2_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Rynek+Główny+Kraków" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day2_loc2') }}
                    </a>{{ t('malopolska_day2_desc_3') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Bazylika+Mariacka+Kraków" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day2_loc3') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('malopolska_day3_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('malopolska_day3_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Ojcowski+Park+Narodowy" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day3_loc1') }}
                    </a>{{ t('malopolska_day3_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Energylandia+Zator" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day3_loc2') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('malopolska_day4_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('malopolska_day4_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Kopalnia+Soli+Wieliczka" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('malopolska_day4_loc1') }}
                    </a>{{ t('malopolska_day4_desc_2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-red-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4">{{ t('summary_title') }}</h3>
              <ul class="space-y-3 text-gray-700">
                <li><strong>{{ t('summary_distance') }}</strong>{{ t('malopolska_distance') }}</li>
                <li><strong>{{ t('summary_time') }}</strong>{{ t('malopolska_time') }}</li>
                <li><strong>{{ t('summary_character') }}</strong>{{ t('malopolska_character') }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6 mb-4">{{ t('taste_title_malopolska') }}</h3>
              <p class="text-gray-700">{{ t('malopolska_taste') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Destination: Lubelszczyzna -->
      <section id="lubelszczyzna" class="mb-16 scroll-mt-24">
        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-emerald-700 mb-6">{{ t('lubelszczyzna_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-semibold mb-4">{{ t('plan_title_3d') }}</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg">{{ t('lubelszczyzna_day1_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('lubelszczyzna_day1_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Rynek+Kazimierz+Dolny" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day1_loc1') }}
                    </a>{{ t('lubelszczyzna_day1_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Góra+Trzech+Krzyży+Kazimierz+Dolny" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day1_loc2') }}
                    </a>{{ t('lubelszczyzna_day1_desc_3') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Wąwóz+Korzeniowy+Dół" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day1_loc3') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('lubelszczyzna_day2_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('lubelszczyzna_day2_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Zamek+Lubelski" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day2_loc1') }}
                    </a>{{ t('lubelszczyzna_day2_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Państwowe+Muzeum+na+Majdanku" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day2_loc2') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('lubelszczyzna_day3_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('lubelszczyzna_day3_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Magiczne+Ogrody+Janowiec" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('lubelszczyzna_day3_loc1') }}
                    </a>{{ t('lubelszczyzna_day3_desc_2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4">{{ t('summary_title') }}</h3>
              <ul class="space-y-3 text-gray-700">
                <li><strong>{{ t('summary_distance') }}</strong>{{ t('lubelszczyzna_distance') }}</li>
                <li><strong>{{ t('summary_time') }}</strong>{{ t('lubelszczyzna_time') }}</li>
                <li><strong>{{ t('summary_character') }}</strong>{{ t('lubelszczyzna_character') }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6 mb-4">{{ t('taste_title_lubelszczyzna') }}</h3>
              <p class="text-gray-700">{{ t('lubelszczyzna_taste') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Destination: Dolny Śląsk -->
      <section id="dolny-slask" class="mb-16 scroll-mt-24">
        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-orange-700 mb-6">{{ t('dolny_slask_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-semibold mb-4">{{ t('plan_title_4d') }}</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg">{{ t('dolny_slask_day1_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('dolny_slask_day1_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Ostrów+Tumski+Wrocław" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day1_loc1') }}
                    </a>{{ t('dolny_slask_day1_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Rynek+Wrocław" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day1_loc2') }}
                    </a>{{ t('dolny_slask_day1_desc_3') }}
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('dolny_slask_day2_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('dolny_slask_day2_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=ZOO+Wrocław+Afrykarium" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day2_loc1') }}
                    </a>{{ t('dolny_slask_day2_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Hydropolis+Wrocław" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day2_loc2') }}
                    </a>.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('dolny_slask_day3_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('dolny_slask_day3_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Zamek+Książ" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day3_loc1') }}
                    </a>{{ t('dolny_slask_day3_desc_2') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Podziemne+Miasto+Osówka" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day3_loc2') }}
                    </a>{{ t('dolny_slask_day3_desc_3') }}
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg">{{ t('dolny_slask_day4_title') }}</h4>
                  <p class="text-gray-600">
                    {{ t('dolny_slask_day4_desc_1') }}
                    <a href="https://www.google.com/maps/search/?api=1&query=Kolorowe+Jeziorka+Wieściszowice" target="_blank" class="map-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>{{ t('dolny_slask_day4_loc1') }}
                    </a>{{ t('dolny_slask_day4_desc_2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-orange-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4">{{ t('summary_title') }}</h3>
              <ul class="space-y-3 text-gray-700">
                <li><strong>{{ t('summary_distance') }}</strong>{{ t('dolny_slask_distance') }}</li>
                <li><strong>{{ t('summary_time') }}</strong>{{ t('dolny_slask_time') }}</li>
                <li><strong>{{ t('summary_character') }}</strong>{{ t('dolny_slask_character') }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6 mb-4">{{ t('taste_title_dolny_slask') }}</h3>
              <p class="text-gray-700">{{ t('dolny_slask_taste') }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-16">
      <div class="container mx-auto px-6 py-8 text-center">
        <p v-html="t('footer_copy')"></p>
        <p class="text-sm text-gray-400 mt-2">{{ t('footer_tagline') }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}

.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://placehold.co/1920x1080/6366f1/ffffff?text=Polska+Droga');
  background-size: cover;
  background-position: center;
}

.map-link {
  display: inline-flex;
  align-items: center;
  color: #3b82f6; /* text-blue-500 */
  font-weight: 500;
  transition: color 0.2s;
}

.map-link:hover {
  color: #1d4ed8; /* text-blue-700 */
}

.map-link svg {
  margin-right: 0.5rem;
  flex-shrink: 0;
}
</style>
