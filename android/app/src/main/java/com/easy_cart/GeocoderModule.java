package com.easy_cart;


import android.location.Address;
import android.location.Geocoder;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class GeocoderModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    GeocoderModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void getAddress(double latitude, int longitude) {
        Log.d("address", "inside________________________________________");
        Geocoder geocoder = new Geocoder(reactContext, Locale.ENGLISH);

        try {
            List<Address> addresses = geocoder.getFromLocation(latitude, longitude, 1);
            if (addresses.size() > 0) {

                Address fetchedAddress = addresses.get(0);
                Log.d("address", fetchedAddress.toString());
                Log.d("locality", fetchedAddress.getLocality());
                Log.d("zipcode", fetchedAddress.getPostalCode());
                Log.d("sudbAdmin", fetchedAddress.getSubAdminArea());

                StringBuilder strAddress = new StringBuilder();
                for (int i = 0; i < fetchedAddress.getMaxAddressLineIndex(); i++) {
                    strAddress.append(fetchedAddress.getAddressLine(i)).append(" ");
                }
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("success", strAddress.toString());
                Log.d("address", strAddress.toString());

            } else {
                Log.d("address", "Searching Current Address");
            }

        } catch (IOException e) {
            e.printStackTrace();
            Log.d("error", "Could not get address..!");
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "Geocoder";
    }
}