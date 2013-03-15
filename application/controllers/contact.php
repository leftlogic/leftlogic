<?php

class Contact extends MY_Controller {

  function Contact() {
    $this->page = 'contact';
    parent::Controller();
  }
  
  function index() {
    parse_str($_SERVER['QUERY_STRING'], $_GET);
    
    $this->load->helper(array('form'));
    $this->load->library(array('email', 'form_validation'));

    $data['name'] = $this->input->post('name');
    $data['email'] = $this->input->post('email');
    $data['message'] = isset($_GET['subject']) ? $_GET['subject'] : $this->input->post('the_data');
    $data['found_us'] = $this->input->post('heard');

    $data['server_message'] = '';
    
    if ($this->input->post('action') == 'send') { 
      $rules = array(
        array(
          'field'   => 'name', 
          'label'   => 'name', 
          'rules'   => 'required'
        ),
        array(
          'field'   => 'email', 
          'label'   => 'email address', 
          'rules'   => 'required|valid_email'
        ),
        array(
          'field'   => 'the_data', 
          'label'   => 'message', 
          'rules'   => 'required'
        )
      );

      $this->form_validation->set_rules($rules);
      $this->form_validation->set_error_delimiters('<li>', '</li>');
      $this->form_validation->set_message('required', 'Your %s is required to send.');
  
      if ($this->form_validation->run() == true) {
        // Send Email
        $this->email->from($data['email'], $data['name']);
        $this->email->to('info@leftlogic.com');
        $this->email->subject('Contact via leftlogic.com from ' . $data['name']);
        $this->email->message('Found via: ' . $data['found_us'] . "\n\n" . $data['message']);
        if ($data['found_us']) $this->email->send();

        $data = array(
          'name' => '',
          'email' => '',
          'found_us' => '',
          'message' => ''
        );
        $data['server_message'] = '<p class="success">Thank you, your message has been sent.</p>';
      } else {
        $data['server_message'] = '<p class="error">We couldn\'t send your message.</p><ol class="error">' . $this->form_validation->error_string . '</ol>';
      }
    }

    $this->view('contact', $data);
  }
}
