function submit() {
  // Firebase
  var ref = new Firebase("https://anti-bully.firebaseio.com");

  // Input value
  var nama = $('#nama').val(),
      kepala_sekolah = $('#kepala_sekolah').val(),
      no_telp = $('#no_telp').val(),
      alamat_sekolah = $('#alamat').val(),
      kelas = $('#kelas').val(),
      nisn = $("#nisn").val(),
      kode_pos = $('#kode_pos').val(),
      sekolah = $('#sekolah').val(),
      tingkat_sekolah = $('#tingkat').val();

  // Required input
  var input = $('.input').val();
  if (input == '') {
    alert('Please insert input');
  } else {
    // Send data to firebase
    ref.push().set({
      nama: nama,
      kepala_sekolah: kepala_sekolah,
      no_telp: no_telp,
      alamat_sekolah: alamat_sekolah,
      kelas: kelas,
      nisn: nisn,
      kode_pos: kode_pos,
      sekolah: sekolah,
      nisn: nisn,
      tingkat_sekolah: tingkat_sekolah
    });
  }
}
