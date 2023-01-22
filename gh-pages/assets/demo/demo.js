type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  showNotification: function(from, align, message, type) {
    color = Math.floor((Math.random() * 4) + 1);
    console.log(type[color], Math.floor((Math.random() * 4) + 1))

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: message

    }, {
      type: type,
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};
