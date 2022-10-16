for (var i = 0; i < String.length; i++) 
{if (String[i] === search) 
{count++;}
}

for (var i = 0; i < String.length; i++) 
{if (String[i] !== search) continue;
count++;}