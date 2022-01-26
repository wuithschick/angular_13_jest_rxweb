# Angular13Jest

--> npm run test

Currently, the test for the app.component.ts fails with following message:

Cannot read property 'properties' of undefined
TypeError: Cannot read property 'properties' of undefined
    at RxFormBuilder.Object.<anonymous>.RxFormBuilder.checkObjectPropAdditionalValidation (C:\cb\repos\_angular_13_jest\angular_13_jest\packages\reactive-form-validators\services\rx-form-builder.ts:162:39)
    at RxFormBuilder.Object.<anonymous>.RxFormBuilder.formGroup (C:\cb\repos\_angular_13_jest\angular_13_jest\packages\reactive-form-validators\services\rx-form-builder.ts:423:14)
    at RxFormBuilder.Object.<anonymous>.RxFormBuilder.group (C:\cb\repos\_angular_13_jest\angular_13_jest\packages\reactive-form-validators\services\rx-form-builder.ts:242:30)
    at AppComponent.ngOnInit (C:\cb\repos\_angular_13_jest\angular_13_jest\src\app\app.component.ts:19:25)
    at callHook (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:2518:22)
    at callHooks (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:2487:17)
    at executeInitAndCheckHooks (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:2438:9)
    at refreshView (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:9474:21)
    at renderComponentOrTemplate (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:9573:9)
    at tickRootContext (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:10804:9)
    at detectChangesInRootView (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:10829:5)
    at RootViewRef.detectChanges (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:21418:9)
    at ComponentFixture._tick (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\testing.mjs:140:32)
    at C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\testing.mjs:153:22
    at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:407:30)
    at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:3765:43)
    at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:406:56)
    at Object.onInvoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:25457:33)
    at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:406:56)
    at Zone.Object.<anonymous>.Zone.run (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:167:47)
    at NgZone.run (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\core.mjs:25311:28)
    at ComponentFixture.detectChanges (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\@angular\core\fesm2015\testing.mjs:152:25)
    at C:\cb\repos\_angular_13_jest\angular_13_jest\src\app\app.component.spec.ts:22:13
    at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:407:30)
    at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:3765:43)
    at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:406:56)
    at Zone.Object.<anonymous>.Zone.run (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:167:47)
    at Object.wrappedFunc (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\zone.js\bundles\zone-testing-bundle.umd.js:4250:34)
    at Promise.then.completed (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\utils.js:391:28)
    at new Promise (<anonymous>)
    at callAsyncCircusFn (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\utils.js:316:10)
    at _callCircusTest (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\run.js:218:40)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at _runTest (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\run.js:155:3)
    at _runTestsForDescribeBlock (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\run.js:66:9)
    at _runTestsForDescribeBlock (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\run.js:60:9)
    at run (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\run.js:25:3)
    at runAndTransformResultsToJestFormat (C:\cb\repos\_angular_13_jest\angular_13_jest\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:170:21)
