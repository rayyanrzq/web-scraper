// Import library yang dibutuhkan
const axios = require('axios');
const cheerio = require('cheerio');

// URL target yang ingin di-scrape (ini contoh, ganti dengan URL target Anda)
const url = 'https://darioamodei.com/';

// Fungsi utama untuk scraping
async function scrapeWebsite() {
  try {
    // Mengambil HTML dari website target
    const response = await axios.get(url);
    const html = response.data;
    
    // Load HTML ke Cheerio
    const $ = cheerio.load(html);
    
    // // Contoh: mengambil semua judul (h3)
    // const titles = [];
    // $('h3').each((index, element) => {
    //   titles.push($(element).text().trim());
    // });
    
    // Contoh: mengambil semua link
    const links = [];
    $('li a').each((index, element) => {
      links.push({
        text: $(element).text().trim(),
        href: $(element).attr('href')
      });
    });
    
    // Menampilkan hasil
    // console.log('Judul:', titles);
    console.log('Links:', links);
    
    // Di sini Anda bisa menambahkan logika untuk menyimpan data ke file atau database
    
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Jalankan fungsi scraping
scrapeWebsite();