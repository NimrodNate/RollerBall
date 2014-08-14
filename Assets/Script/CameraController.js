#pragma strict

var Player : GameObject;
var offset : Vector3;

function Start () {
	offset = transform.position;
};

function LateUpdate () {
	transform.position = Player.transform.position + offset;
};