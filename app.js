const devices = JSON.parse(localStorage.getItem('devices')) || [];



devices.forEach(function(device) {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
    console.log(device.name);
    
  });

  $('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user: user, name: name });
    localStorage.setItem('devices',JSON.stringify(devices))
    console.log(devices);
    location.href = 'Device_List.html';
  });
    

  