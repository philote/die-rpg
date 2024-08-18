import DieRpgItemBase from './base-item.mjs';

export default class DieRpgSpell extends DieRpgItemBase {
  static LOCALIZATION_PREFIXES = [
    'DIE_RPG.Item.base',
    'DIE_RPG.Item.Spell',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.spellLevel = new fields.NumberField({
      required: true,
      nullable: false,
      integer: true,
      initial: 1,
      min: 1,
      max: 9,
    });

    return schema;
  }
}
