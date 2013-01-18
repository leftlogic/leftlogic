<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MY_Controller extends Controller {
  var $motif = false;
  var $green = false;
  var $asides = null;
  var $hideDefault = false;
  var $page = '';
  
  function view($page = '', $data = null) {
    $this->header($data);
    $this->load->view($page);
    $this->footer($data);
  }
  
  function header($data) {
    date_default_timezone_set('Europe/London');
    $now = time();
    $time = date('H:i', $now);
    $day = date('N', $now);
    $this->green = true;
    if ($day < 6 && ($time >= '09:00' && $time <= '18:00')) {
      $this->green = false;
    }
    
    $data['page'] = $this->page;
    $data['motif'] = $this->motif;
    $data['green'] = $this->green;
    
    $data['class'] = '';
    if ($this->green) {
      $data['class'] .= 'green ';
    }
    
    if ($this->motif) {
      $data['class'] .= 'motif ';
    }
    
    $this->load->view('includes/header', $data);
  }
  
  function footer($data) {
    $data['motif'] = $this->motif;    
    $this->load->view('includes/aside_header');
    
    if (@$data['asides']) {
      $this->asides = $data['asides'];
    }
    
    if (!$this->hideDefault) $this->load->view('includes/asides/asides');

    if ($this->asides) {
      if (is_string($this->asides)) {
        $this->load->view('includes/asides/' . $this->asides);
      } else if (is_array($this->asides)) {
        foreach ($this->asides as $aside) {
          $this->load->view('includes/asides/' . $aside);
        }        
      }
    }
    
    $this->load->view('includes/footer', $data);    
  }
}
?>