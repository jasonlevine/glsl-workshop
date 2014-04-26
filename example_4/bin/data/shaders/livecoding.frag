#version 120

uniform sampler2DRect u_tex_unit0;
uniform float time;
uniform vec2 windowSize;
uniform vec2 mousePos;
uniform float vol;

void main( void )
{
    vec2 newTexCoord;
	newTexCoord.s = gl_TexCoord[0].s;
	newTexCoord.t = gl_TexCoord[0].t;
    
    
    float r = texture2DRect( u_tex_unit0, newTexCoord ).r;
    float g = texture2DRect( u_tex_unit0, newTexCoord ).g;
    float b = texture2DRect( u_tex_unit0, newTexCoord ).b;
    
	gl_FragColor = vec4(r, g, b, 1.0);
}