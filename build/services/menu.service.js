"use strict";
var MenuService;
(function (MenuService) {
    const fieldSelection = [
        'nameVi',
        'nameEn',
        'href',
        'childs',
        '-_id'
    ];
    MenuService.menu = async (model, parsedData) => {
        const role = model.modelName.toLowerCase();
        const queries = [
            { visible: true },
            { isParent: true },
        ];
        const data = await model
            .find({ $and: queries })
            .populate({
            path: 'childs',
            select: fieldSelection.join(' '),
            options: { sort: { index: 1 } }
        })
            .sort({ index: 1 })
            .select(fieldSelection.join(' '));
        return {
            [role]: data
        };
    };
    MenuService.createMenu = async (model, body, parsedData) => {
        const role = model.modelName.toLowerCase();
        const data = new model(body);
        await data.save();
        return {
            [role]: data
        };
    };
})(MenuService || (MenuService = {}));
module.exports = MenuService;
//# sourceMappingURL=menu.service.js.map