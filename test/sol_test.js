const TokenP = artifacts.require("TokenP");

contract('TokenP',function(accounts){
    var tokenInstance;

    it ('Token Name',function(){
        return TokenP.deployed().then(function(instance){
            Maininstance = instance
            token = instance.name();
            return token;
        }).then(function(token){
            assert.equal(token,'Token Gold','Yes u are Not right');
        })
    })

    it ('Total Supply',function(){
        return TokenP.deployed().then(function(instance){
            Maininstance = instance
            token = instance.totalSupply();
            return token;
        }).then(function(totalSupply){
            assert.equal(totalSupply,1000,'Worng Token counting!!');
        })
    })

    it ('Transfer',function(){
        return TokenP.deployed().then(function(instance){
            Maininstance = instance
            booll = Maininstance.transfer.call(accounts[1],10,{'from':accounts[0]})
            return booll;
        }).then(function(booll){
            assert.equal(booll,true,'Token Transfer is not successful!!');
        })
    })

    it ('Transfer From Outside',function(){
        return TokenP.deployed().then(function(instance){
            Maininstance = instance
            booll = Maininstance.approve.call(accounts[1],100,{'from':accounts[0]})
            return booll;
        }).then(function(booll){
            assert.equal(booll,true,'Value is false!');

        })



}) })