var rp = require('request-promise');

var pokeUrl = 'http://pokeapi.co';

getJSON = function(url) {
  var options = {
    url: url,
    json: true,
  };
  return rp.get(options)
    .catch(function(error) {
      return error;
    })
    .then(function(response) {
      return response;
    });
};

var Pokedex = (function() {
  function Pokedex() {}

  Pokedex.prototype.getBerryByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry/' + name);
  };

  Pokedex.prototype.getBerryFirmnessByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry-firmness/' + name);
  };

  Pokedex.prototype.getBerryFlavorByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry-flavor/' + name);
  };

  Pokedex.prototype.getContestTypeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/contest-type/' + name);
  };

  Pokedex.prototype.getContestEffectById = function(id) {
    return getJSON(pokeUrl + '/api/v2/contest-type/' + id);
  };

  Pokedex.prototype.getSuperContestEffectById = function(id) {
    return getJSON(pokeUrl + '/api/v2/super-contest-effect/' + id);
  };

  Pokedex.prototype.getEncounterMethodByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-method/' + name);
  };

  Pokedex.prototype.getEncounterConditionByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-condition/' + name);
  };

  Pokedex.prototype.getEncounterConditionValueByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-condition-value/' + name);
  };

  Pokedex.prototype.getEvolutionChainById = function(id) {
    return getJSON(pokeUrl + '/api/v2/evolution-trigger/' + id);
  };

  Pokedex.prototype.getEvolutionTriggerByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/evolution-trigger/' + name);
  };

  Pokedex.prototype.getGenerationByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/generation/' + name);
  };

  Pokedex.prototype.getPokedexByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokedex/' + name);
  };

  Pokedex.prototype.getVersionByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/version/' + name);
  };

  Pokedex.prototype.getVersionGroupByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/version-group/' + name);
  };

  Pokedex.prototype.getItemByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item/' + name);
  };

  Pokedex.prototype.getItemAttributeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-attribute/' + name);
  };

  Pokedex.prototype.getItemCategoryByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-category/' + name);
  };

  Pokedex.prototype.getItemFlingEffectByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-fling-effect/' + name);
  };

  Pokedex.prototype.getItemPocketByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-pocket/' + name);
  };

  Pokedex.prototype.getMoveByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move/' + name);
  };

  Pokedex.prototype.getMoveAilmentByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-ailment/' + name);
  };


  return Pokedex;
})();

module.exports = Pokedex;
