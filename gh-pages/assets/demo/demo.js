type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  showNotification: function(from, align, message, type) {
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
