const Entity = require('./entity');

class Character extends Entity{
    constructor(params, campaignID) {
        super(params, campaignID);
        const {age, entry, family_id, is_dead, location_id, name, race, section_id, sex, title, entityType} = params;

        this.path = 'characters';
        Object.assign(this, {age, entry, family_id, is_dead, location_id, name, race, section_id, sex, title, entityType});
    }
}

module.exports = {
    Character,
}
