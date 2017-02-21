require('../css/bootstrap.min.css');
require('jquery/dist/jquery.min.js');
require('../libs/bootstrap.min.js');
require('bootstrap/js/tooltip.js');
require('bootstrap/js/popover.js');

require('bootstrap-datepicker/dist/css/bootstrap-datepicker3.css');
require('bootstrap-datepicker/dist/js/bootstrap-datepicker.js');

require('../libs/FV/formValidation.min.css');
require('../libs/FV/formValidation.min.js');
require('../libs/FV/bootstrap.min.js');
require('../less/register.less');

$(document).ready(function() {
	
	/****************表单提示框***************/

	$('#sign').popover();
	$('#phone').popover();
	$('#username').popover();
	$('#password').popover();
	$('#passwordconfirm').popover();
	$('#verification_code').popover();

	/***************表单事件效果*************/

	$('body').on('click', '.form-control', function() {

		$('.labelborder').removeClass('labelborder');

		$(this).closest('.form-group').find('.control-label').addClass('labelborder');

	});
	$('blockquote').css("background-color","rgba(255,255,255,0.5)").slideDown(1000);

	$('blockquote').next().slideDown(1000,"swing");

	$('#registerForm button').addClass("register_form_buttom");

    /****************表单验证**************/

	$('#datePicker')
		.datepicker({
			format: 'yyyy-mm-dd'
		})
		.on('changeDate', function() {
			$('#registerForm').formValidation('revalidateField', 'date');
		});
	$('#registerForm').formValidation({
		framework: 'bootstrap',
		icon: {
			valid:'glyphicon glyphicon-ok',
			invalid:'glyphicon glyphicon-remove',
			validating:'glyphicon glyphicon-refresh'
		},
		fields:{
			username:{
				icon:false,
				message:'用户名无效',
				validators:{
					notEmpty:{  
						message:'用户名不能为空'
					},
					regexp:{
						regexp:/^[\w]{6,20}$/,
						message:'请输入6到20个字符'
					}
				}
			},
			phone:{
				icon:false,
				validators:{
					notEmpty:{
						message:'手机号不能为空'
					},
					regexp:{
						regexp:/^1[3|4|5|7|8]\d{9}$/,
						message:'请输入适当的手机号码'
					}
				}
			},
			password:{
				icon:false,
				validators:{
					notEmpty:{
						message:'密码不能为空'
					},
					regexp:{
						regexp:/^[\w]{6,18}$/,
						message:'密码由6到18位数字，字母或下划线组成'
					}
				}
			},
			passwordconfirm:{
				icon:false,
				validators:{
					identical:{
						field:'password',
						message:'与第一次密码不一致'
					}
				}
			},
			date:{
				icon:false,
				validators:{
					notEmpty:{
						message: '请选择日期或者填写日期'
					},
					date:{
						format:'YYYY-MM-DD',
						message: '格式不正确'
					}
				}
			},
			verification_code:{
				icon:false,
				validators:{
					notEmpty:{
						message: '验证码为空'
					},
					regexp:{
						regexp:/^[\d]{6}$/,
						message: '最多只能填写6位有效数字'
					}
				}
			}
		}
	});
});