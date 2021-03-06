
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

// Function declarations.
ivec4 function(ivec4 par[3]);
bool is_all(const in ivec4 par, const in int value);
bool is_all(const in ivec4 array[3], const in ivec4 value);
void set_all(out ivec4 array[3], const in ivec4 value);

void main (void)
{
	ivec4 par[3];
	ivec4 ret = ivec4(0, 0, 0, 0);

	float gray = 0.0;

	// Initialize the entire array to 1.
	set_all(par, ivec4(1, 1, 1, 1));

	ret = function(par);

	// The parameter should remain unchanged by the function and the function should return 1.
	if(is_all(par, ivec4(1, 1, 1, 1)) && is_all(ret, 1))
	{
		gray = 1.0;
	}

	gl_FragColor = vec4(gray, gray, gray, 1.0);
}

// Function definitions.
ivec4 function(ivec4 par[3])
{
	// Return the value of the array.
	if(is_all(par, ivec4(1, 1, 1, 1)))
	{
		// Test parameter qualifier (default is "in").
		set_all(par, ivec4(0, 0, 0, 0));

		return ivec4(1, 1, 1, 1);
	}
	else
		return ivec4(0, 0, 0, 0);
}

bool is_all(const in ivec4 par, const in int value)
{
	bool ret = true;

	if(par[0] != value)
		ret = false;
	if(par[1] != value)
		ret = false;
	if(par[2] != value)
		ret = false;
	if(par[3] != value)
		ret = false;

	return ret;
}

bool is_all(const in ivec4 array[3], const in ivec4 value)
{
	bool ret = true;

	if(array[0] != value)
		ret = false;
	if(array[1] != value)
		ret = false;
	if(array[2] != value)
		ret = false;

	return ret;
}

void set_all(out ivec4 array[3], const in ivec4 value)
{
	array[0] = value;
	array[1] = value;
	array[2] = value;
}
