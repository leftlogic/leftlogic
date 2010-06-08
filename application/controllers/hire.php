<?php

class Hire extends Controller {

	function Hire()
	{
		parent::Controller();
	}
	
	function index()
	{
	  $this->load->helper(array('form'));
    $this->load->library(array('email', 'form_validation'));
    
    $data['motif'] = false;
	  $data['page'] = 'hire';

	  $data['name'] = $this->input->post('fName');
    $data['email'] = $this->input->post('fEmail');
    $data['message'] = $this->input->post('fMessage');
    $data['found_us'] = $this->input->post('fHeard');

    $data['server_message'] = '';
    
    if ($this->input->post('action') == 'send') { 
      $rules = array(
        array(
          'field'   => 'fName', 
          'label'   => 'name', 
          'rules'   => 'required'
        ),
        array(
          'field'   => 'fEmail', 
          'label'   => 'email address', 
          'rules'   => 'required|valid_email'
        ),
        array(
          'field'   => 'fMessage', 
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
        $this->email->to('remy@leftlogic.com');
        $this->email->subject('Contact via leftlogic.com from ' . $data['name']);
        $this->email->message('Found via: ' . $data['found_us'] . "\n\n" . $data['message']);
        $this->email->send();

        $data['server_message'] = '<p>Thank you, your message has been sent.</p>';
      } else {
        $data['server_message'] = '<p class="error">We couldn\'t send your message.</p><ol class="error">' . $this->form_validation->error_string . '</ol>';
      }
    }

		$this->load->view('includes/header', $data);
		$this->load->view('hire', $data);
		$this->load->view('includes/aside_header');
		$this->load->view('includes/asides/asides');
		$this->load->view('includes/footer', $data);
	}
}