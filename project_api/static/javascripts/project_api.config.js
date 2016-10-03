/**
 * Config
 * @namespace project_api.config
 */
(function(){

    angular
        .module('project_api.config')
        .config(config);
    
    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc Enable HTML5 routing
     */
    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
});