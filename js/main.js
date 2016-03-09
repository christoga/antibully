function submit() {
  var ref = new Firebase("https://anti-bully.firebaseio.com");
  var nama = $('#broken').val();
  var kelas = $('#arrows').val();
  var sekolah = $('#avicii').val();
  var tingkat_sekolah = $('#dj').val();

  ref.push().set({
    nama: nama,
    kelas: kelas,
    sekolah: sekolah,
    tingkat_sekolah: tingkat_sekolah
  });
}
