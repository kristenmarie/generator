import { TestBed, inject } from '@angular/core/testing';

import { GeneratorService } from './generator.service';
import { Variable } from '../variable';

describe('GeneratorService and all of its methods', () => {
  let _generatorService: GeneratorService;

  beforeEach(() => {
    _generatorService = new GeneratorService();
    TestBed.configureTestingModule({
      providers: [GeneratorService]
    });
  });

  it('should be created', inject([GeneratorService], (_generatorService: GeneratorService) => {
    expect(_generatorService).toBeTruthy();
  }));

  it('should return 125 when calling generatePermutations(4 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations.length).toBe(125);
  });

  it('should contain [1,1,1] when calling generatePermutations(4 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations).toContain([1, 1, 1]);
  });

  it('should return 125 when calling generatePermutations(3 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations.length).toBe(125);
  });

  it('should contain [1,1,1] when calling generatePermutations(3 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations).toContain([1, 1, 1]);
  });

  it('should return 25 when calling generatePermutations(2 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations.length).toBe(25);
  });

  it('should contain [1,1] when calling generatePermutations(2 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations).toContain([1, 1]);
  });

  it('should return 5 when calling generatePermutations(1 variable)', () => {
    const a = new Variable('a', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations.length).toBe(5);
  });

  it('should contain [1] when calling generatePermutations(1 variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, x];
    const generatedCombinations: any[] = _generatorService.generatePermutations(variables);
    expect(generatedCombinations).toContain([1]);
  });

  it('should return "[-a]" when calling simplifyEquation(equation, variableToSolve)', () => {
    const equation = 'x + a = 0';
    const variableToSolve: Variable = new Variable('x',  0, 0, 0);

    const simplifiedEquation: string = _generatorService.simplifyEquation(equation, variableToSolve.name);
    expect(simplifiedEquation.toString()).toBe('[-a]');
  });

  it('should return "[sqrt(-a), -sqrt(-a)]" when calling simplifyEquation(equation, variableToSolve)', () => {
    const equation = 'x^2 + a = 0';
    const variableToSolve: Variable = new Variable('x',  0, 0, 0);

    const simplifiedEquation: string = _generatorService.simplifyEquation(equation, variableToSolve.name);
    expect(simplifiedEquation.toString()).toBe('[sqrt(-a),-sqrt(-a)]');
  });

  it('should return "[(-220328269/832788672)*(27*a+27*abs(a))^(1/3),(220328269/1665577344)*((138907099/80198051)*i+1)*(27*a+27*abs(a))^(1/3),(220328269/1665577344)*((-138907099/80198051)*i+1)*(27*a+27*abs(a))^(1/3)]" when calling simplifyEquation(equation, variableToSolve)', () => {
    const equation = 'x^3 + a = 0';
    const variableToSolve: Variable = new Variable('x',  0, 0, 0);

    const simplifiedEquation: string = _generatorService.simplifyEquation(equation, variableToSolve.name);
    expect(simplifiedEquation.toString()).toBe('[(-220328269/832788672)*(27*a+27*abs(a))^(1/3),(220328269/1665577344)*((138907099/80198051)*i+1)*(27*a+27*abs(a))^(1/3),(220328269/1665577344)*((-138907099/80198051)*i+1)*(27*a+27*abs(a))^(1/3)]');
  });

  it('should return "[(1/2)*(-b+sqrt(-4*a*c+b^2))*a^(-1),(1/2)*(-b-sqrt(-4*a*c+b^2))*a^(-1)]" when calling simplifyEquation(equation, variableToSolve)', () => {
    const equation = 'a*x^2 + b*x + c = 0';
    const variableToSolve: Variable = new Variable('x',  0, 0, 0);

    const simplifiedEquation: string = _generatorService.simplifyEquation(equation, variableToSolve.name);
    expect(simplifiedEquation.toString()).toBe('[(1/2)*(-b+sqrt(-4*a*c+b^2))*a^(-1),(1/2)*(-b-sqrt(-4*a*c+b^2))*a^(-1)]');
  });

  it('should return a random intiger between 1-10 inclusive when calling getRandomIntInclusive(min, max)', () => {
    const radnomInt: number = _generatorService.getRandomIntInclusive(1, 10);
    expect(radnomInt >= 1 || radnomInt <= 10).toBe(true);
  });

  it('should splice a random permutation set 1 time when calling splicePermutationSetRandomly(permutationsList)  decreasing the permutationList count by 1', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const permutationsList: any[] = _generatorService.generatePermutations(variables);

    _generatorService.splicePermutationSetRandomly(permutationsList);
    expect(permutationsList.length).toBe(124);
  });

  it('should splice a random permutation set 2 times when calling splicePermutationSetRandomly(permutationsList)  decreasing the permutationList count by 2', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const permutationsList: any[] = _generatorService.generatePermutations(variables);

    _generatorService.splicePermutationSetRandomly(permutationsList);
    _generatorService.splicePermutationSetRandomly(permutationsList);
    expect(permutationsList.length).toBe(123);
  });

  it('should splice a random permutation set 3 times when calling splicePermutationSetRandomly(permutationsList) decreasing the permutationList count by 3', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const permutationsList: any[] = _generatorService.generatePermutations(variables);

    _generatorService.splicePermutationSetRandomly(permutationsList);
    _generatorService.splicePermutationSetRandomly(permutationsList);
    _generatorService.splicePermutationSetRandomly(permutationsList);
    expect(permutationsList.length).toBe(122);
  });

  it('should create an object of {a: 1, b: 1, c: 1} when calling createVariablesObject()', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];
    const randomSet = [1, 1, 1];

    let variablesObject = _generatorService.createVariableObject(randomSet, variables);
    let variablesObjectArr = _generatorService.toArray(variablesObject);
    expect(variablesObjectArr[0][0]).toBe('a');
    expect(variablesObjectArr[0][1]).toBe(1);
    expect(variablesObjectArr[1][0]).toBe('b');
    expect(variablesObjectArr[1][1]).toBe(1);
    expect(variablesObjectArr[2][0]).toBe('c');
    expect(variablesObjectArr[2][1]).toBe(1);
  });

  it('should return -5 and 5 upon calling solveForVariable(randomSet, simplifiedEquation, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const randomSet = [1, 0, 0];

    const simplifiedEquation = _generatorService.simplifyEquation('a*x^2 + b*x + c = 25', 'x');

    const result =  _generatorService.solveForVariable(randomSet, simplifiedEquation, variables);

    expect(result[0]).toBe('5');
    expect(result[1]).toBe('-5');
    expect(result.toString()).toBe('5,-5');
  });

  it('should return 2*i and -2*i upon calling solveForVariable(randomSet, simplifiedEquation, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const randomSet = [1, 0, 0];

    const simplifiedEquation = _generatorService.simplifyEquation('a*x^2 + b*x + c = -4', 'x');

    const result =  _generatorService.solveForVariable(randomSet, simplifiedEquation, variables);
    expect(result.toString()).toBe('2*i,-2*i');
  });

  it('should return true upon calling isInt(input)', () => {
    const input = 4;

    expect(_generatorService.isInt(input)).toBe(true);
  });

  it('should return true upon calling isInt(input)', () => {
    const input = '4';

    expect(_generatorService.isInt(input)).toBe(true);
  });

  it('should return false upon calling isInt(input)', () => {
    const input = 4.4;

    expect(_generatorService.isInt(input)).toBe(false);
  });

  it('should return false upon calling isInt(input)', () => {
    const input = 'sqrt(5)';

    expect(_generatorService.isInt(input)).toBe(false);
  });

  it('should return true upon calling containsImaginary("2i")', () => {
    const input = '2i';

    expect(_generatorService.containsImaginary(input)).toBe(true);
  });

  it('should return true upon calling containsImaginary("2i + 4")', () => {
    const input = '2i + 4';

    expect(_generatorService.containsImaginary(input)).toBe(true);
  });

  it('should return false upon calling containsImaginary("4")', () => {
    const input = '4';

    expect(_generatorService.containsImaginary(input)).toBe(false);
  });


  it('should return 0 upon calling calculateDecimalPlaces("4")', () => {
    const input = '4';

    expect(_generatorService.calculateDecimalPlaces(input)).toBe(0);
  });

  it('should return 1 upon calling calculateDecimalPlaces("4.0")', () => {
    const input = '4.0';

    expect(_generatorService.calculateDecimalPlaces(input)).toBe(1);
  });

  it('should return 2 upon calling calculateDecimalPlaces("4.05")', () => {
    const input = '4.05';

    expect(_generatorService.calculateDecimalPlaces(input)).toBe(2);
  });

  it('should return true upon calling compareResultWithUserSpecification("5", variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['5'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(true);
  });

  it('should return false upon calling compareResultWithUserSpecification("5i", variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['5i'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return false upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['5i'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return true upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100, true);
    const variables: Variable[] = [a, b, c, x];

    const values = ['5i'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(true);
  });

  it('should return false upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['150'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return false upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['-150'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return false upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['-10.5'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return false upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 0, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['-10.5'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(false);
  });

  it('should return true upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 1, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['-10.5'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);

    expect(meetsUserSpecification).toBe(true);
  });

  it('should return true upon calling compareResultWithUserSpecification(values, variables)', () => {
    const a = new Variable('a', 0, 1, 5);
    const b = new Variable('b', 0, 1, 5);
    const c = new Variable('c', 0, 1, 5);
    const x = new Variable('x', 2, -100, 100);
    const variables: Variable[] = [a, b, c, x];

    const values = ['-10.05'];

    const meetsUserSpecification = _generatorService.compareResultWithUserSpecification(values, variables);
    console.log(meetsUserSpecification);
    expect(meetsUserSpecification).toBe(true);
  });



  it('should return [[3, 4, [-5, 5]]] upon calling generateValidVariableCombination(variables, numberOfProblems, equation) ', () => {
    const a = new Variable('a', 0, 3, 4 );
    const b = new Variable('b', 0, 3, 4);
    const c = new Variable('c', 0, 1, 5);
    c.answerMeetsAllSpecification = true;
    const variables: Variable[] = [a, b, c];

    const numberOfProblems = 1;

    const equation = 'a^2 + b^2 = c^2';
 
    const result =  _generatorService.generateValidVariablePermutations(variables, numberOfProblems, equation);

    expect(result.length).toBe(1);
    expect(result[0].length).toBe(3);
    expect(result[0][2].length).toBe(1);
    expect(result[0][2].toString()).toContain('5');
  });

  it('should return [[3, 4, [5]], [6, 8, [10]]] upon calling generateValidVariableCombination(variables, numberOfProblems, equation) ', () => {
    const a = new Variable('a', 0, 1, 10);
    const b = new Variable('b', 0, 1, 10);
    const c = new Variable('c', 0, 1, 10);
    c.answerMeetsAllSpecification = true;
    const variables: Variable[] = [a, b, c];

    const numberOfProblems = 2;

    const equation = 'a^2 + b^2 = c^2';
    const result =  _generatorService.generateValidVariablePermutations(variables, numberOfProblems, equation);


    expect(result.length).toBe(2);
    expect(result[0].length).toBe(3);
    expect(result[0][2].length).toBe(1);
    expect(result[1].length).toBe(3);
    expect(result[1][2].length).toBe(1);
  });
/*
  it('should generate a set of values for a variable based on min, max, and decimal numbers', () => {
    const variable = new Variable('a', 1, 1, 2);


    const expectedResult = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0'];
    //const expectedResult = [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

    let result = _generatorService.generateRangeOfValues(variable);

    expect(result[0]).toBe(expectedResult[0]);
    expect(result[1]).toBe(expectedResult[1]);
    expect(result[2]).toBe(expectedResult[2]);
    expect(result[3]).toBe(expectedResult[3]);
    expect(result[4]).toBe(expectedResult[4]);
    expect(result[5]).toBe(expectedResult[5]);
    expect(result[6]).toBe(expectedResult[6]);
    expect(result[7]).toBe(expectedResult[7]);
    expect(result[8]).toBe(expectedResult[8]);
    expect(result[9]).toBe(expectedResult[9]);
  });

  it('should choose a set of values based on the generated list of values', () => {
    let valueList = [];
    valueList[0] = [1.1, 1.2, 1.3, 1.4, 1.5];
    valueList[1] = [2.1, 2.2, 2.3, 2.4, 2.5];
    valueList[2] = [3.1, 3.2, 3.3, 3.4, 3.5];

    let testSetResult = _generatorService.createTestSet(valueList);

    expect(valueList[0]).toContain(testSetResult[0]);
    expect(valueList[1]).toContain(testSetResult[1]);
    expect(valueList[2]).toContain(testSetResult[2]);
  });

  it('should generate a list of valid permutation sets given decimal parameters', () => {
    const a = new Variable('a', 1, 1, 5);
    const b = new Variable('b', 1, 1, 5);
    const c = new Variable('c', 1, 1, 5);

    const variables: Variable[] = [a, b, c];
    const numberOfProblems = 5;

    const equation = 'a^2 + b^2 = c^2';
    const expression = _generatorService.simplifyEquation(equation, variables[variables.length - 1].name);

    let results = _generatorService.generateDecimalVariablesPermutations(variables, numberOfProblems, equation);

    let expectedResult = _generatorService.solveForVariable(results[0], expression, variables);

    expect(results[0][2]).toEqual(expectedResult[0]);
  }); */

});
