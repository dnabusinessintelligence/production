import Base from './Base.mjs';

/**
 * Used by form.field.Picker
 * @class Neo.form.field.trigger.Picker
 * @extends Neo.form.field.trigger.Base
 */
class Picker extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Picker'
         * @private
         */
        className: 'Neo.form.field.trigger.Picker',
        /**
         * @member {String} ntype='trigger-picker'
         * @private
         */
        ntype: 'trigger-picker',
        /**
         * @member {String|null} iconCls='fa fa-caret-down'
         */
        iconCls: 'fa fa-caret-down',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spinup'
         * @private
         */
        type: 'picker'
    }}

    onTriggerClick(data) {
        this.field.onPickerTriggerClick();
    }
}

Neo.applyClassConfig(Picker);

export {Picker as default};