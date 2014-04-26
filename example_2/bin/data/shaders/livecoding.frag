#version 120

uniform float time;
uniform vec2 windowSize;
uniform vec2 mousePos;

void main( void )
{
    float r = 0.0; //mousePos.x / windowSize.x;
    float g = 0.0; //mousePos.y / windowSize.y;
    float b = 0.0; //(sin(time) + 1.0) * 0.5;
    
	gl_FragColor = vec4(r, g, b, 1.0);
}