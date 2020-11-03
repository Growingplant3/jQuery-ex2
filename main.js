$(function() {
  $('#accordion dd').hide();
  let accordionDt = $('#accordion dt')
  accordionDt.on('click', function() {
    let self = $(this)
    self.next('dd').slideToggle('slow');
    accordionDt.not(self).next('dd').slideUp('slow');
  });
});