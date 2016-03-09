function submit() {
  var ref = new Firebase("https://anti-bully.firebaseio.com");
  var nama = $('#broken').val();
  var kelas = $('#arrows').val();
  var sekolah = $('#avicii').val();
  var tipe_sekolah = $('#dj').val();

  ref.push().set({
    nama: nama,
    kelas: kelas,
    sekolah: sekolah,
    tipe_sekolah: tipe_sekolah
  });
}
