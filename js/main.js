function submit() {
  // Firebase
  var ref = new Firebase("https://anti-bully.firebaseio.com");

  // Input value
  var nama = $('#broken').val(),
      kelas = $('#arrows').val(),
      sekolah = $('#avicii').val(),
      nisn = $('#better_day').val(),
      tingkat_sekolah = $('#dj').val();

  // Send data to firebase
  ref.push().set({
    nama: nama,
    kelas: kelas,
    sekolah: sekolah,
    nisn: nisn,
    tingkat_sekolah: tingkat_sekolah
  });
}
