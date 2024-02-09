// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return organization value as nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit")
      });
  
    test("should return executiveDirector value as Jeff", function(){
        expect(launchcode.executiveDirector).toBe("Jeff")
          });

    test("should return percentageCoolEmployees value as 100", function(){
            expect(launchcode.percentageCoolEmployees).toBe(100)
              });
  
     test("should check programsOffered array values and length", function(){
                expect(launchcode.programsOffered[0]).toBe("Web Development")
                expect(launchcode.programsOffered[1]).toBe("Data Analysis")
                expect(launchcode.programsOffered[2]).toContain("Liftoff")
                expect(launchcode.programsOffered.length).toBe(3)
                  });

      test("check the launchoutput and return the correct string", function(){
                    expect(launchcode.launchOutput(4)).toBe('Launch!')
                    expect(launchcode.launchOutput(99)).toBe('Code!')
                    expect(launchcode.launchOutput(25)).toBe('Rocks!')
                    expect(launchcode.launchOutput(6)).toBe('LaunchCode!')
                    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
                    expect(launchcode.launchOutput(100)).toBe('Launch Rocks!')
                    expect(launchcode.launchOutput(90)).toBe('LaunchCode Rocks!')
                    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.")
                      });

});