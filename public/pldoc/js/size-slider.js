define(["jquery"],function(e){var i={vars:{wrapper:e("#icons-preview"),heading:e(".pldoc-tab-heading"),example:e(".example-icon .icon-display"),sliderControl:e("#iconFontSlider"),sliderValue:e("#iconFontSliderValue")},init:function(){this.listenForSlider()},listenForSlider:function(){i.vars.sliderControl.on("input change",function(e){i.updateIconSize(e.target.value),i.updateAria(e.target.value),i.updateInputText(e.target.value)})},updateAria:function(e){i.vars.sliderControl.attr("aria-now",e)},updateIconSize:function(e){i.vars.example.css({width:e+"px"})},updateInputText:function(e){i.vars.sliderValue.val(e)}};i.init()});