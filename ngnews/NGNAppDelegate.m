//
//  AppDelegate.m
//
//  Copyright © 2015 Netguru Sp. z o.o. All rights reserved.
//

#import "NGNAppDelegate.h"

@interface NGNAppDelegate ()

@property (strong, nonatomic) UIViewController *rootViewController;

@end

#pragma mark -

@implementation NGNAppDelegate

#pragma mark Property constructors

- (UIWindow *)window {
	return _window ?: (_window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds]);
}

- (UIViewController *)rootViewControllerWithRootView:(UIView *)view {
	UIViewController *viewController = [[UIViewController alloc] init];
	viewController.view = view;
	return viewController;
}

#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	
	NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];
	RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"RootView" launchOptions:launchOptions];
	
	self.window.rootViewController = [self rootViewControllerWithRootView:rootView];
	[self.window makeKeyAndVisible];
	
	return YES;
}

@end
