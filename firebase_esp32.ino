#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>

// Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

/* 1. Define the WiFi credentials */
#define WIFI_SSID "FH-WIFI"
#define WIFI_PASSWORD "Yy123456"

/* 2. If work with RTDB, define the RTDB URL and database secret */
//Realtime Database
#define DATABASE_URL "https://esp32-irrigation-system-default-rtdb.firebaseio.com"
//Project Setting - Service Accounts - Database Secret
#define DATABASE_SECRET "mYM9cgdxd0dEBG4PpiOvkrrDkhIFa23CJ5thuFMJ"

/* 3. Define the Firebase Data object */
FirebaseData fbdo;

/* 4, Define the FirebaseAuth data for authentication data */
FirebaseAuth auth;

/* Define the FirebaseConfig data for config data */
FirebaseConfig config;

unsigned long dataMillis = 0;


void setup(){
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
  /* Assign the database URL and database secret(required) */
  config.database_url = DATABASE_URL;
  config.signer.tokens.legacy_token = DATABASE_SECRET;

  Firebase.reconnectWiFi(true);
  /* Initialize the library with the Firebase authen and config */
  Firebase.begin(&config, &auth);
}


void loop(){
  int humidity  = random(80, 100);
  float temperature = 0.12 + random(80, 100);
  if (millis() - dataMillis > 10000){
    dataMillis = millis();

    if (Firebase.RTDB.setInt(&fbdo, "user/fahym/humidity", humidity)) {
      requestOn();
    }else {
      requestOff();
    }

    if (Firebase.RTDB.setFloat(&fbdo, "user/fahym/temperature", temperature)) {
      requestOn();
    }
    else {
      requestOff();
    }
  }
}


void requestOn(){
  Serial.println("PASSED");
  Serial.println(fbdo.dataPath());
  Serial.println(fbdo.pushName());
  Serial.println(fbdo.dataPath() + "/" + fbdo.pushName());
}
void requestOff(){
  Serial.println("FAILED");
  Serial.println("REASON: " + fbdo.errorReason());
}