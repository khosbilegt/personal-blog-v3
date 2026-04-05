---
title: "Kinect for UE4 - Space Shooter"
type: "UNIVERSITY"
heroImage: "https://cdn.freebiesupply.com/logos/large/2x/xbox-9-logo-png-transparent.png"
pubDate: "Jun 22 2023"
description: "Built a Microsoft Kinect plugin for Unreal Engine 4 and motion-controlled game using it."
---

## Background

I used to be a member of the Computer Graphics Laboratory during my bachelor's study in the National University of Mongolia. We had too many neat devices that were gathering dust on the shelves, ranging from 3D printers, Lidar scanners, VR & Hololens headsets; and the professor in charge of the laboratory tasked me with using one of them for a project of my own.

I took his advice and rummaged through the devices until I found something that I didn't expect to find there: Microsoft Kinect.

I'd owned an XBox 360 and had spent a considerable part of my childhood playing on it, and my nostalgia came flooding back to me when I saw the Microsoft Kinect (a more modern version of the Kinect device that was sold as an add-on for the XBox 360).

As a result, I ended up choosing it and started working on a project I'd thought about making for quite a few years at the time for my bachelor's thesis: a motion-controlled video game.

## Research

I had considerable experience in UE4 Development and was intent on making the game on the engine, but then I came head-first into a giant obstacle: Unreal Engine 4 didn't have any plugins to consume input from Microsoft Kinect, as it was a deprecated device.

I faced 2 choices: choosing Unity (which had a native plugin on the store) or making my own plugin to consume input from Kinect. In the end, I came to the conclusion that learning another Game Engine would be more difficult than finding a solution to input consumption.

I delved into the world of documentation for the first time and found Kinect for Windows SDK. In the process, I realized that Microsoft Kinect was far more powerful than I'd first assumed, with support for directional audio, heat sensors and even hand gesture recognition.

In the end, I settled on using only a small subset of its capabilities: the Body Frame Reader.

After that, I faced a giant obstacle in the form of connecting the the Kinect SDK with the UE4 C++ framework, which was an alien territory for a student who didn't have any experience with the C++ ecosystem, much less Linkers & projects as massive as the UE4 Framework.

## Implementation

I found out that downloading the pre-compiled Kinect20.lib file and adding it into the Plugin's folder and compiling the project allowed me to import the Kinect SDK classes into my UE4 code as a third-party imports, which was provided by the UE4 Framework.

```cpp
public class XKinect : ModuleRules
{
public XKinect(ReadOnlyTargetRules Target) : base(Target)
{
PCHUsage = ModuleRules.PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicAdditionalLibraries.Add(Path.Combine(ModuleDirectory, "KinectSDK", "Kinect20.lib"));

        PublicIncludePaths.AddRange(
    		new string[] {
    			// ... add public include paths required here ...
    			"C:\\Program Files\\Microsoft SDKs\\Kinect\\v2.0_1409\\inc"
            }
    	);


    	PrivateIncludePaths.AddRange(
    		new string[] {
    			// ... add other private include paths required here ...
    		}
    		);


    	PublicDependencyModuleNames.AddRange(
    		new string[]
    		{
    			"Core",
    			// ... add other public dependencies that you statically link with here ...
    		}
    		);


    	PrivateDependencyModuleNames.AddRange(
    		new string[]
    		{
    			"CoreUObject",
    			"Engine",
    			"Slate",
    			"SlateCore",
    			// ... add private dependencies that you statically link with here ...
    		}
    		);


    	DynamicallyLoadedModuleNames.AddRange(
    		new string[]
    		{
    			// ... add any modules that your module loads dynamically here ...
    		}
        );
    }

}

```

Then I declared the required parameters in the Header file and initialized them in the Implementation file (which are often separate in the UE4 engine's convention).

Declaration:

```cpp
IKinectSensor* sensor;

ICoordinateMapper* mapper;

IBodyFrameReader* bodyFrameReader;

Joint joints[JointType_Count];
Implementation:
GetDefaultKinectSensor(&sensor);

sensor->Open();

sensor->get_CoordinateMapper(&mapper);
```

After I initialized the connection, the rest was trivial using UE4's Vector Objects to track the body frames and consuming the input produced by the Kinect SDK.

```cpp
IBody* bodies[BODY_COUNT] = { 0 };

IBodyFrame* bodyFrame;

bodyFrameReader->AcquireLatestFrame(&bodyFrame);

bodies[i]->get_HandLeftState(&leftHandState);

bodies[i]->get_HandRightState(&rightHandState);

bodies[i]->GetJoints(JointType_Count, joints);

bodies[i]->get_TrackingId(&trackingID);

JointOrientation jointOrientations[JointType_Count];

res = bodies[i]->GetJointOrientations(JointType_Count, jointOrientations);
```

## Results:

Github Project: https://github.com/khosbilegt/UE4-SpacePilot/tree/master

View the Thesis (only in Mongolian for now): https://drive.google.com/file/d/1HVVSPyZ565cZaPqOfTZWzGu_oQRGrZ2N/view?usp=sharing

View the Play Test video of the project built using the Kinect Plugin: https://www.youtube.com/watch?v=NuF38_t82_k
