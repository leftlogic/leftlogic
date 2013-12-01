<?php

class Hiring extends MY_Controller {
  function Hiring() {
    $this->page = 'hiring';
    $this->green = true;
    parent::Controller();
  }

  function index() {
    $data['asides'] = 'subscribe';
    $this->view('hiring', $data);
  }

}
