/*
 * By default original bootstrap-validator look for only form-group. We need support for form-row as well
 */
var ref = $.fn.validator.Constructor;
$.extend(ref.prototype, {
    showErrors : function ($el) {
        var method = this.options.html ? 'html' : 'text'
        var errors = $el.data('bs.validator.errors')
        var $group = $el.closest('.form-group, .form-row')
        var $block = $group.find('.help-block.with-errors')
        var $feedback = $group.find('.form-control-feedback')

        if (!errors.length) return

        errors = $('<ul/>')
            .addClass('list-unstyled')
            .append($.map(errors, function (error) { return $('<li/>')[method](error) }))

        $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html())
        $block.empty().append(errors)
        $group.addClass('has-error has-danger')

        $group.hasClass('has-feedback')
        && $feedback.removeClass(this.options.feedback.success)
        && $feedback.addClass(this.options.feedback.error)
        && $group.removeClass('has-success')
    }
});

$.extend(ref.prototype, {
    clearErrors : function ($el) {
        var $group = $el.closest('.form-group, .form-row')
        var $block = $group.find('.help-block.with-errors')
        var $feedback = $group.find('.form-control-feedback')

        $block.html($block.data('bs.validator.originalContent'))
        $group.removeClass('has-error has-danger has-success')
        //$group.addClass('has-success')

        $group.hasClass('has-feedback')
        && $feedback.removeClass(this.options.feedback.error)
        && $feedback.removeClass(this.options.feedback.success)
        && getValue($el)
        && $feedback.addClass(this.options.feedback.success)
        && $group.addClass('has-success')
    }
});

$.extend(ref.prototype, {
    validate : function () {
        var self = this

        $.when(this.$inputs.map(function (el) {
            return self.validateInput($(this), false)
        })).then(function () {
            self.toggleSubmit()
            //self.focusError()
        })
        return this
    }
});

/*
Validator.prototype.validate = function () {
    var self = this

    $.when(this.$inputs.map(function (el) {
      return self.validateInput($(this), false)
    })).then(function () {
      self.toggleSubmit()
      self.focusError()
    })
    return this
  }
*/

/**
 * setup field so validator kicks in only on 1st bloor. i.e. user will notified only when leave the field
 * Validate onBlur if invalid but change validation message if valid #551 : https://github.com/1000hz/bootstrap-validator/issues/551
 *
 * @param selector  - "#fieldId"
 */
function suppressValidationTillBloor(selector) {
    $(selector).on("input.bs.validator", function (e) {
        if ($(this).hasClass("mcc-touched")) {
            var formElem = $(this).parents("form").data("bs.validator");
            formElem.validateInput($(this));
            return;
        } else {
            //e.stopImmediatePropagation();
            e.stopPropagation();
        }
    });

    $(selector).on("blur", function() {
        $(this).addClass("mcc-touched");
        var validatorElem = $(this).parents("form").data("bs.validator");
        validatorElem.validateInput($(this));
    });
}