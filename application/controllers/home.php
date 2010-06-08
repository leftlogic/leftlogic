<?php

class Home extends Controller {

	function Home()
	{
		parent::Controller();	
	}
	
	function index()
	{
	  $data['motif'] = true;
	  $data['page'] = 'home';

		$this->load->view('includes/header', $data);
		$this->load->view('home');
		$this->load->view('includes/aside_header');
		$this->load->view('includes/asides/asides');
		$this->load->view('includes/footer', $data);
	}
}