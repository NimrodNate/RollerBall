#pragma strict

public var speed : float;
public var countText : GUIText;
private var count = 0;
public var winText : GUIText;

function Start(){
	SetCountText();
	winText.text = "";
}

function FixedUpdate () 
{
	var moveV : float = Input.GetAxis ("Vertical");
	var moveH : float = Input.GetAxis ("Horizontal");
	var movement = Vector3(moveH,0.0,moveV);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider)
{
	Destroy(other.gameObject);
	if(other.gameObject.tag == "PickUp")
	{
		other.gameObject.SetActive(false);
		count += 1;
		SetCountText();
	}	
}

function SetCountText(){
	countText.text = "Count: " + count.ToString();
	Debug.Log("Count number " + count);
	
	if(count >= 12){
		winText.text = "YOU WIN!";
	}
}