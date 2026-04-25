const BACKEND_URL = "https://anilkava-backend-affilative.hf.space/auto-add-product/?url=";
const ADMIN_PASS = "Anil@9799";

// Bhai: Yahan 1000 links bhi daloge toh chalega
const PRODUCT_LINKS = [
    // { url: "https://amzn.to/48dXsYe", image: "https://m.media-amazon.com/images/I/81YXtph65uL._SL1500_.jpg" },
    // { url: "https://amzn.to/3Qp9B6s", image: "https://m.media-amazon.com/images/I/818vnFP09yL._SL1500_.jpg" },
    // { url: "https://amzn.to/4cZ7Aqd", image: "https://m.media-amazon.com/images/I/51RdeaOqECL._SL1200_.jpg" },
    // { url: "https://amzn.to/4mIrlpo", image: "https://m.media-amazon.com/images/I/61kqDPQbHnL._SY741_.jpg" },
    //{ url: "https://amzn.to/4cCrYMv", image: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg" },
    //{ url: "https://amzn.to/4dYBfAZ", image: "https://m.media-amazon.com/images/I/71DtzhzFXDL._SX569_.jpg" },
    //{ url: "https://amzn.to/4eD58qK", image: "https://images-eu.ssl-images-amazon.com/images/I/71R8VsJ07nL._AC_UL210_SR195,210_.jpg" },
    //{ url: "https://amzn.to/4cFnt3L", image: "https://m.media-amazon.com/images/I/71uCAn5-jbL._SL1500_.jpg" },
   // { url: "https://amzn.to/4vHoX6x", image: "https://m.media-amazon.com/images/I/71ZisjnWwHL._SL1500_.jpg" },
    { url: "https://amzn.to/4mLCmGl", image: "https://m.media-amazon.com/images/I/61Zh96uaaVL._SL1500_.jpg" },
    { url: "https://amzn.to/4eAaJOv", image: "https://m.media-amazon.com/images/I/81-TGXuOMAL._SL1500_.jpg" },
    { url: "https://amzn.to/4mOLJFt", image: "https://m.media-amazon.com/images/I/61nFKgi0qPL._SL1500_.jpg" },
    { url: "https://amzn.to/3OkXTJz", image: "https://m.media-amazon.com/images/I/71hFT7EkGML._SL1500_.jpg" },
    { url: "https://amzn.to/4n4FQUV", image: "https://m.media-amazon.com/images/I/61+SW9nDTEL._SL1500_.jpg" },
    // { url: "https://amzn.to/4sM8b3d", image: "https://m.media-amazon.com/images/I/61B5hIAmvdL._SL1500_.jpg" },
    // { url: "https://amzn.to/4tYzc4t", image: "https://m.media-amazon.com/images/I/51OXGMtDR8L._SL1500_.jpg" },
    // { url: "https://amzn.to/4e4B7Qp", image: "https://m.media-amazon.com/images/I/41ew8UsrGoL._SL1080_.jpg" },
    // { url: "https://amzn.to/42oQP1G", image: "https://m.media-amazon.com/images/I/718YKkENapL._SL1500_.jpg" },
    // { url: "https://amzn.to/41LAsft", image: "https://m.media-amazon.com/images/I/61-XNG5lPBL._SL1500_.jpg" },
    // { url: "https://amzn.to/4ttQ8QM", image: "https://m.media-amazon.com/images/I/61sh0HWly7L._SL1500_.jpg" },
    // { url: "https://amzn.to/4tvusUn", image: "https://m.media-amazon.com/images/I/519lVtUpqdL._SL1200_.jpg" },
    // { url: "https://amzn.to/3Qp9GXQ", image: "https://m.media-amazon.com/images/I/61VvQWExD0L._SL1500_.jpg" },
    // { url: "https://amzn.to/4vIl412", image: "https://m.media-amazon.com/images/I/61BoaOUf+KL._SL1500_.jpg" },
    // { url: "https://amzn.to/4u4zRBF", image: "https://m.media-amazon.com/images/I/71udm2yMPRL._SL1500_.jpg" },
    // { url: "https://amzn.to/48cAlNG", image: "https://m.media-amazon.com/images/I/81RSrpHOiaL._SL1500_.jpg" },
    // { url: "https://amzn.to/4mI3BSd", image: "https://m.media-amazon.com/images/I/71jku1voAaL._SL1500_.jpg" },
    // { url: "https://amzn.to/4tsLK4x", image: "https://m.media-amazon.com/images/I/81G7HkMBe1L._SL1500_.jpg" },
    // { url: "https://amzn.to/4twmLx8", image: "https://m.media-amazon.com/images/I/81gySF32x7L._SL1500_.jpg" },
    // { url: "https://amzn.to/4e9KxKF", image: "https://m.media-amazon.com/images/I/81s8KMbTz4L._SL1500_.jpg" },
    // { url: "https://amzn.to/4mOWY0D", image: "https://m.media-amazon.com/images/I/71EN6U4QjtL._SL1500_.jpg" },
    // { url: "https://amzn.to/3QodCrP", image: "https://m.media-amazon.com/images/I/81nPkLHN3vL._SL1500_.jpg" },
    // { url: "https://amzn.to/4cCE9ZJ", image: "https://m.media-amazon.com/images/I/61dFcpPdJkL._SY741_.jpg" },
    // { url: "https://amzn.to/42nGNxI", image: "https://m.media-amazon.com/images/I/51mpNhYjOnL._SY741_.jpg" },
    // { url: "https://amzn.to/4vKTeRV", image: "https://m.media-amazon.com/images/I/61f8ZKHW-IL._SY741_.jpg" },
    // { url: "https://amzn.to/3OxWxLx", image: "https://m.media-amazon.com/images/I/71pMKtelscL._SY741_.jpg" },
    // { url: "https://amzn.to/41S4u17", image: "https://m.media-amazon.com/images/I/61iZyHCOhTL._SY741_.jpg" },
    // { url: "https://amzn.to/4cBmkKI", image: "https://m.media-amazon.com/images/I/51dv0bCGPAL._SY741_.jpg" },
    // { url: "https://amzn.to/4mLRiUX", image: "https://m.media-amazon.com/images/I/61iuQGtv8uL._SY741_.jpg" },
    // { url: "https://amzn.to/4mLE8Yh", image: "https://m.media-amazon.com/images/I/51ZMqctLSyL._SY741_.jpg" },
    // { url: "https://amzn.to/4u5NMY5", image: "https://m.media-amazon.com/images/I/81sp7DcnTYL._SY741_.jpg" },
    // { url: "https://amzn.to/4u85DxK", image: "https://m.media-amazon.com/images/I/511nsvnsMeL._SX679_.jpg" },
    // { url: "https://amzn.to/3QWBzqc", image: "https://m.media-amazon.com/images/I/81WzIbilc9L._SY741_.jpg" },
    // { url: "https://amzn.to/3QtsbKC", image: "https://m.media-amazon.com/images/I/71qJNrZhd1L._SY606_.jpg" },
    // { url: "https://amzn.to/4mLgz1u", image: "https://m.media-amazon.com/images/I/81OzkOV2WiL._SX569_.jpg" },
    // { url: "https://amzn.to/4cFWRjo", image: "https://m.media-amazon.com/images/I/61w6tzMVuRL._SY741_.jpg" },
];

let currentIndex = 0;
const BATCH_SIZE = 20; // Ek baar mein 12 product dikhayenge
let isLoading = false;

document.addEventListener('DOMContentLoaded', () => {
    // Scroll event listener add kiya
    window.addEventListener('scroll', handleScroll);
    loadBhaiStore();
});

async function loadBhaiStore() {
    if (isLoading) return;
    isLoading = true;

    const grid = document.getElementById('productGrid');
    const loader = document.getElementById('loader');
    
    // Memory se cache uthao
    const cachedData = JSON.parse(localStorage.getItem('bhai_cache_fast') || "{}");
    
    // Current batch ki links nikalna
    const nextBatch = PRODUCT_LINKS.slice(currentIndex, currentIndex + BATCH_SIZE);
    
    if (nextBatch.length === 0) {
        isLoading = false;
        if (loader) loader.style.display = 'none';
        return;
    }

    // 1. Cache se turant batch render karo
    nextBatch.forEach(prod => {
        if (cachedData[prod.url]) {
            updateOrAddCard(cachedData[prod.url]);
        }
    });

    // 2. Fresh fetch for the current batch
    for (const prodData of nextBatch) {
        try {
            const response = await fetch(BACKEND_URL + encodeURIComponent(prodData.url), { method: 'POST' });
            const result = await response.json();

            if (result.status === "success" && result.data) {
                const itemData = {
                    // title: result.data.title,
                    // price: result.data.price,
                    review: result.review || "Checking...",
                    image: prodData.image,
                    url: prodData.url
                };

                let updatedCache = JSON.parse(localStorage.getItem('bhai_cache_fast') || "{}");
                updatedCache[prodData.url] = itemData;
                localStorage.setItem('bhai_cache_fast', JSON.stringify(updatedCache));

                updateOrAddCard(itemData);
                if (loader) loader.style.display = 'none';
            }
        } catch (e) {
            console.log("Fetch failed for:", prodData.url);
        }
    }

    currentIndex += BATCH_SIZE;
    isLoading = false;
    if (loader) loader.style.display = 'none';
}

// Scroll logic: Jab user bottom ke paas pahuche, naya batch load karo
function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        loadBhaiStore();
    }
}

function updateOrAddCard(item) {
    const grid = document.getElementById('productGrid');
    const cleanPrice = item.price ? item.price.toString().replace(/[^\d,]/g, '') : "Check Site";
    
    // Unique ID based on URL
    let cardId = btoa(item.url).substring(0, 50).replace(/[^a-zA-Z0-9]/g, "");
    let cardWrapper = document.getElementById(cardId);
    
    const cardHTML = `
        <div class="product-card bg-white p-4 border border-gray-100 flex flex-col justify-between group shadow-sm rounded-sm h-full">
            <div>
                <div class="w-full aspect-square bg-white mb-4 flex items-center justify-center overflow-hidden p-2">
                    <img src="${item.image}" class="object-contain max-h-full transition duration-500 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/200?text=Image'">
                </div>
                <h4 class="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2">${item.title}</h4>
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-xl font-black text-black">₹${cleanPrice}</span>
                </div>
                <div class="border-t border-dashed border-gray-100 pt-3 mb-4">
                    <p class="text-[11px] text-gray-600 leading-relaxed">
                        <strong class="text-[#2874f0]">Bhai Review:</strong><br>
                        <span class="line-clamp-3">${item.review}</span>
                    </p>
                    <button onclick="this.previousElementSibling.lastElementChild.classList.toggle('line-clamp-3')" class="text-[9px] font-bold text-blue-600 mt-1 uppercase cursor-pointer">Read More</button>
                </div>
            </div>
            <a href="${item.url}" target="_blank" class="w-full bg-[#fb641b] text-white text-center py-2.5 font-bold uppercase text-[10px] rounded-sm transition hover:bg-[#f4511e]">
                Buy Now
            </a>
        </div>`;

    if (cardWrapper) {
        cardWrapper.innerHTML = cardHTML;
    } else {
        const newDiv = document.createElement('div');
        newDiv.id = cardId;
        newDiv.innerHTML = cardHTML;
        grid.appendChild(newDiv);
    }
}

// Baki saare functions bina bigade niche hain
function searchProducts(val) {
    const searchTerm = val.toLowerCase().trim();
    const grid = document.getElementById('productGrid');
    const allWrappers = grid.children;
    for (let wrapper of allWrappers) {
        const titleElement = wrapper.querySelector('h4');
        if (titleElement) {
            const titleText = titleElement.innerText.toLowerCase();
            wrapper.style.display = titleText.includes(searchTerm) ? "block" : "none";
        }
    }
}

function openProfile() { document.getElementById('profileModal').classList.remove('hidden'); }
function closeProfile() { document.getElementById('profileModal').classList.add('hidden'); }