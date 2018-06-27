quality={
  normal:"Normal",
	good:"Good",
	veryGood:"Very Good",
	special:"Special"
};

potQuantity={
	normal:3,
	bronze:10,
	silver:15,
	gold:20
};

userIngredients={
	"Tiny Mushroom":0,
	"Bluk Berry":0,
	"Apricorn":0,
	"Fossil":0,
	"Big Root":0,
	"Icy Rock":0,
	"Honey":0,
	"Balm Mushroom":0,
	"Rainbow Matter":0
}

RECIPES={
	"Red Stew":{
		"Normal":{
			"Tiny Mushroom":5
		},
		"Special":{
			"Big Root":5
		}
	},
	"Blue Soda":{
		"Normal":{
			"Bluk Berry":5
		},
		"Special":{
			"Icy Rock":5
		}
	},
	"Yellow Curry":{
		"Normal":{
			"Apricorn":5
		},
		"Special":{
			"Honey":5
		}
	},
	"Grey Porridge":{
		"Normal":{
			"Fossil":5
		},
		"Special":{
			"Balm Mushroom":5
		}
	},
	"Mouth-Watering Dip":{
		"Normal":{
			"Bluk Berry":3,
			"Tiny Mushroom":2
		},
		"Good":{
			"Bluk Berry":3,
			"Apricorn":1,
			"Honey":1
		},
		"Very Good":{
			"Icy Rock":1,
			"Bluk Berry":2,
			"Honey":2
		}
	},
	"Plain Crepe":{
		"Normal":{
			"Bluk Berry":3,
			"Fossil":2
		},
		"Good":{
			"Bluk Berry":2,
			"Honey":1,
			"Fossil":2
		},
		"Very Good":{
			"Bluk Berry":1,
			"Honey":2,
			"Balm Mushroom":2
		},
		"Special":{
			"Honey":3,
			"Balm Mushroom":2
		}
	},
	"Sludge Soup":{
		"Normal":{
			"Tiny Mushroom":3,
			"Balm Mushroom":2
		},
		"Very Good":{
			"Tiny Mushroom":2,
			"Balm Mushroom":3
		},
		"Special":{
			"Tiny Mushroom":1,
			"Balm Mushroom":3,
			"Rainbow Matter":1
		}
	},
	"Mud Pie":{
		"Normal":{
			"Tiny Mushroom":3,
			"Fossil":2
		},
		"Good":{
			"Tiny Mushroom":3,
			"Icy Rock":2
		},
		"Very Good":{
			"Icy Rock":2,
			"Honey":2,
			"Bluk Berry":1
		},
		"Special":{
			"Honey":3,
			"Icy Rock":2
		}
	},
	"Veggie Smoothie":{
		"Normal":{
			"Big Root":3,
			"Balm Mushroom":1,
			"Apricorn":1
		},
		"Good":{
			"Apricorn":3,
			"Tiny Mushroom":1,
			"Big Root":1
		},
		"Very Good":{
			"Big Root":3,
			"Apricorn":2
		},
		"Special":{
			"Big Root":3,
			"Apricorn":1,
			"Rainbow Matter":1
		}
	},
	"Honey Nectar":{
		"Normal":{
			"Honey":2,
			"Bluk Berry":2,
			"Apricorn":1
		},
		"Good":{
			"Honey":3,
			"Bluk Berry":2
		},
		"Very Good":{
			"Honey":3,
			"Icy Rock":1,
			"Bluk Berry":1
		},
		"Special":{
			"Honey":3,
			"Bluk Berry":1,
			"Rainbow Matter":1
		}
	},
	"Brain Food":{
		"Normal":{
			"Bluk Berry":3,
			"Apricorn":2
		},
		"Good":{
			"Bluk Berry":2,
			"Apricorn":2,
			"Honey":1
		},
		"Very Good":{
			"Honey":2,
			"Icy Rock":1,
			"Apricorn":1,
			"Bluk Berry":1
		}
	},
	"Stone Soup":{
		"Normal":{
			"Fossil":3,
			"Apricorn":2
		},
		"Good":{
			"Apricorn":2,
			"Fossil":2,
			"Icy Rock":1
		},
		"Very Good":{
			"Fossil":1,
			"Icy Rock":3,
			"Apricorn":1
		},
		"Special":{
			"Icy Rock":3,
			"Fossil":1,
			"Rainbow Matter":1
		}
	},
	"Light-as-Air Casserole":{
		"Normal":{
			"Fossil":2,
			"Big Root":2,
			"Icy Rock":1
		},
		"Special":{
			"Icy Rock":3,
			"Big Root":2
		}
	},
	"Hot Pot":{
		"Normal":{
			"Tiny Mushroom":3,
			"Bluk Berry":2
		},
		"Good":{
			"Honey":2,
			"Tiny Mushroom":3
		},
		"Special":{
			"Balm Mushroom":3,
			"Big Root":2
		}
	},
	"Watt a Risotto":{
		"Normal":{
			"Honey":2,
			"Tiny Mushroom":2,
			"Apricorn":1
		},
		"Very Good":{
			"Honey":2,
			"Balm Mushroom":1,
			"Big Root":1,
			"Apricorn":1
		},
		"Special":{
			"Honey":3,
			"Balm Mushroom":1,
			"Big Root":1
		}
	},
	"Get Swole Syrup":{
		"Normal":{
			"Honey":1,
			"Bluk Berry":2,
			"Tiny Mushroom":2
		},
		"Good":{
			"Bluk Berry":2,
			"Tiny Mushroom":1,
			"Honey":1,
			"Balm Mushroom":1
		},
		"Very Good":{
			"Bluk Berry":1,
			"Tiny Mushroom":1,
			"Honey":2,
			"Balm Mushroom":1
		}
	}
};

printRecipes = function(recipes){
  let result = "";
  for(var recipe in recipes){
    result += recipe+":\n";
    for(var quality in recipes[recipe]){
      result += "\t"+quality+":\n";
      for(var ingredient in recipes[recipe][quality]){
        result+="\t\t"+ingredient+": "+recipes[recipe][quality][ingredient]+"\n";
      }
    }
    result+="\n";
  }
  return result;
};

String.prototype.replaceAll = function(search, replacement){
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

updateUserQuantities = function(){
  userIngredients["Tiny Mushroom"]=$("#tinyMushroom").val();
  userIngredients["Bluk Berry"]=$("#blukBerry").val();
  userIngredients["Apricorn"]=$("#apricorn").val();
  userIngredients["Fossil"]=$("#fossil").val();
  userIngredients["Big Root"]=$("#bigRoot").val();
  userIngredients["Icy Rock"]=$("#icyRock").val();
  userIngredients["Honey"]=$("#honey").val();
  userIngredients["Balm Mushroom"]=$("#balmMushroom").val();
  userIngredients["Rainbow Matter"]=$("#rainbowMatter").val();
}

getRecipes = function(quantity){
  let result=[];
  let canMake=true;
  for(recipe in RECIPES){
    for(quality in RECIPES[recipe]){
      canMake=true;
      for(ingredient in RECIPES[recipe][quality]){
        if(userIngredients[ingredient]<RECIPES[recipe][quality][ingredient]*quantity){
          canMake=false;
          break;
        }
      }
      if(canMake){
        if(!result[recipe]){
          result[recipe] = {};
        }
        result[recipe][quality] = RECIPES[recipe][quality];
      }
    }
  }
  return result;
};

formatRecipes = function(recipes){
  return recipes.replaceAll("\n","<br/>").replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;");
};

$(document).ready(function(){
  $("input").on("change paste keyup", function(){
    updateUserQuantities();
    $("#normalPot .recipes").html(formatRecipes(printRecipes(getRecipes(potQuantity.normal))));
    $("#bronzePot .recipes").html(formatRecipes(printRecipes(getRecipes(potQuantity.bronze))));
    $("#silverPot .recipes").html(formatRecipes(printRecipes(getRecipes(potQuantity.silver))));
    $("#goldPot .recipes").html(formatRecipes(printRecipes(getRecipes(potQuantity.gold))));
  });
});
