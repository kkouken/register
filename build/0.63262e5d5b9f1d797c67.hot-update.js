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
		$('#datePicker').datepicker({
				format: 'yyyy-mm-dd'
			})
			.on('changedate', function(e) {
				$('eventform').formValidation('revalidateField', 'date');
			});
		$('eventform').formValidation({
			framework: 'boostrap',
			icon: {
				valid:'glyphicon glyphicon-ok',
				invalid:'glyphicon glyphicon-remove',
				validating:'glyphicon glyphicon-refresh'
			},
			fields: {
				date: {
					validators: {
						noEmpty: {
							message: '请选择日期或者填写日期'
						},
						regexp: {
							regexp: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/,
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