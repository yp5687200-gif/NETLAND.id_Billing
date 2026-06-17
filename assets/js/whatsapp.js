function sendWA(nama){

const pesan =
`Halo ${nama}
Tagihan internet NETLAND.id
silakan lakukan pembayaran.

Admin:
085780088227`;

window.open(
"https://wa.me/6285780088227?text="
+
encodeURIComponent(pesan)
);
}
