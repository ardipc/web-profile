var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sertifikats = [
		{
			name: 'Manage Local Area Network',
			institusi: 'Badan Nasional Sertifikasi Profesi',
			tanggal: 'Aug 2018',
			gambar: 'lan.jpg'
		},
		{
			name: 'Object Oriented Programming',
			institusi: 'Badan Nasional Sertifikasi Profesi',
			tanggal: 'Aug 2018',
			gambar: 'oop.jpg'
		},
		{
			name: 'Database for Information System',
			institusi: 'Badan Nasional Sertifikasi Profesi',
			tanggal: 'Aug 2018',
			gambar: 'database.jpg'
		},
		{
			name: 'Operate & Manage Cloud Database',
			institusi: 'Alibaba Cloud Certification',
			tanggal: 'Jan 2019',
			gambar: 'rds.jpg'
		},
		{
			name: 'Operate & Manage Cloud Server',
			institusi: 'Alibaba Cloud Certification',
			tanggal: 'Jul 2019',
			gambar: 'ecs.png'
		},
		{
			name: 'Publish E-Commerce Website',
			institusi: 'Alibaba Cloud Certification',
			tanggal: 'Aug 2019',
			gambar: 'ecommerce.png'
		},
		{
			name: 'Construct a Dynamic Website',
			institusi: 'Alibaba Cloud Certification',
			tanggal: 'Sep 2019',
			gambar: 'dynamic.png'
		},
		{
			name: 'Introduction of DevOps',
			institusi: 'Alibaba Cloud Certification',
			tanggal: 'Sep 2019',
			gambar: 'introdevops.png'
		},
	];

  res.render('my-layout', {
  	sertifikats: sertifikats.reverse()
  });
});

module.exports = router;
