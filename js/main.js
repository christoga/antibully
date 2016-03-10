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
      tingkat_sekolah = $('#tingkat').val(),
      masalah = $('#masalah').val();

  // Required input
  var input = $('.input').val();
  if (input == '') {
    alert('Please insert input');
    return false;
  }
  else if (masalah.length < 50 ){
    alert('Please write a sentence more than 50 characters')
    return false;
  }
  else {
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
      tingkat_sekolah: tingkat_sekolah,
      masalah: masalah
    });
    alert('Terima kasih telah menjadi anti-bully hero. Kami akan menindaklanjuti laporanmu.');
    return true;
  }
}
