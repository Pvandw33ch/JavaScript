const namaLengkap   = document.getElementById("namaLengkap")
const namaDepan     = document.getElementById("namaDepan")
const namaBelakang  = document.getElementById("namaKeluarga")
const tanggalLahir  = document.getElementById("tanggalLahir")
const umur          = document.getElementById("umur")

namaLengkap.oninput = function(){
    namaDepan.innerHTML     = namaLengkap.value.trim().slice(0, namaLengkap.value.trim().indexOf(" "))
    namaKeluarga.innerHTML  = namaLengkap.value.trim().slice(namaLengkap.value.trim().lastIndexOf(" ")+1)
}

tanggalLahir.onchange = function(){
    umur.innerHTML = (new Date).getFullYear() - Number(tanggalLahir.value.slice(0, 4)) + " Tahun"
}