#include <stdio.h>
#include <stdlib.h>

void update(int *i1, int *i2)
{
    int tmp1, tmp2;

    tmp1 = *i1;
    tmp2 = *i2;

    *i1 = tmp1 + tmp2;
    *i2 = abs(tmp1 - tmp2);
}

int main(int argc, char **argv)
{
    int i1, i2;
    scanf("%i %i", &i1, &i2);

    update(&i1, &i2);

    printf("%i\n%i\n", i1, i2);

    return EXIT_SUCCESS;
}
