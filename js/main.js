function submit() {
  var ref = new Firebase("https://anti-bully.firebaseio.com"),
      nama = $('#broken').val(),
      kelas = $('#arrows').val(),
      sekolah = $('#avicii').val(),
      nisn = $('#better_day').val(),
      tingkat_sekolah = $('#dj').val();

  ref.push().set({
    nama: nama,
    kelas: kelas,
    sekolah: sekolah,
    nisn: nisn,
    tingkat_sekolah: tingkat_sekolah
  });
}
