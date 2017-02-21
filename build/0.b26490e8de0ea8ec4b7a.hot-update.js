webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

	__webpack_require__(17);
	__webpack_require__(19);

	__webpack_require__(20);
	__webpack_require__(22);
	__webpack_require__(23);

	$(document).ready(function() {
		$('#example').popover();
		$('#datePicker')
			.datepicker({
				format: 'yyyy-mm-dd'
			})
			.on('changeDate', function(e) {
				$('#eventForm').formValidation('revalidateField', 'date');
			});
		$('#eventForm').formValidation({
			framework: 'bootstrap',
			icon: {
				valid:'glyphicon glyphicon-ok',
				invalid:'glyphicon glyphicon-remove',
				validating:'glyphicon glyphicon-refresh'
			},
			fields:{
				username:{
					message:'用户名无效',
					validators:{
						notEmpty:{
							message:'用户名不能为空'
						},
						stringLength:{
							min:6,
							max:18,
							message:'请输入6到18个字符'
						}
					}
				},
				date:{
					validators:{
						notEmpty:{
							message: '请选择日期或者填写日期'
						},
						date:{
							format:'YYYY-MM-DD',
							message: '格式不正确'
						}
					}
				}
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
])