// JavaScript Document
var GumModule =	( function(){
								"use strict";
								var brands = [	{brand : "extra",
													price : 1.50},
												{brand : "trident",
													price : 1.00},
												{brand : "doubleMint",
													price : 0.50},
												{brand : "bubblegum",
													price : 0.25}
											];
    
                                var gumArray = [];
                                var totalPrice = 0;
                                
																
								//Private method
								// Recieves brand object and adds selected brand to gumArray								
								var addToCart = function(brand)	{
																	var exists = 0;
																	for (var i = 0; i < gumArray.length; i++)
                                                                    {
                                                                        if (gumArray[i].brand == brand.brand)
                                                                        {
																			exists = 1;
																			gumArray[i].quantity += 1;
																		}
																	}
																	
																	if (exists == 0)
																	{
																		var addGum = 	{
																							brand : brand.brand,
																							quantity : 1
																						}
																		gumArray.push(addGum);
																	}
																	
																	displayCartItems();
																				
																};
																
								//Private Method
								// Recieves Brand object and adds the price to totalPrice
								var addToCartPrice = function(brand)	{
																			totalPrice += brand.price;
																			//Display new cart total
																			displayCartPrice();
																		};
																
																
								//Private Method
								// Displays the updated shopping cart to the page							
								var displayCartItems = function()	{
																		document.getElementById("pCartItems").innerHTML = "";
																		
																		for (var i = 0 ; i < gumArray.length ; i++)
																		{
																			document.getElementById("pCartItems").innerHTML += gumArray[i].brand + " (" + gumArray[i].quantity + ")  ";	
																		}
																		
																	};
								
								
								//Private Method
								//Displays new cart total price to the page
								var displayCartPrice = function()	{
																		document.getElementById("pCartTotal").innerHTML = "$" + totalPrice.toFixed(2).toString();
																	};
								
								
								//public Method
								//Recieves the type of gum bought and calls functions to add to cart and add to total price
								var addPrice = function(gum)    {																	
                                                                    for (var i = 0; i < brands.length; i++)
                                                                    {
                                                                        if (brands[i].brand == gum)
                                                                        {
                                                                            addToCart(brands[i]);
																			addToCartPrice(brands[i]);
                                                                        }
                                                                    }
												                };
															
								//public Method
								//Clears the shopping cart and resets the total price
								var clear = function() 	{
															gumArray = [];
															totalPrice = 0;
															
															document.getElementById("pCartItems").innerHTML = "";
															document.getElementById("pCartTotal").innerHTML = "";
														};
								
								return 	{ 
											addPrice : addPrice,
											clear : clear
										};
							}
				());
				
				
//EVENT LISTENERS
document.getElementById("btnExtra").addEventListener("click", function() {GumModule.addPrice("extra");});
document.getElementById("btnDoubleMint").addEventListener("click", function() {GumModule.addPrice("doubleMint");});
document.getElementById("btnTrident").addEventListener("click", function() {GumModule.addPrice("trident");});
document.getElementById("btnBubblegum").addEventListener("click", function() {GumModule.addPrice("bubblegum");});

document.getElementById("btnClear").addEventListener("click", function() {GumModule.clear();});




