#include <stdio.h>
#include <stdlib.h>

int max_of_four(int i1, int i2, int i3, int i4)
{
    int r = i1;

    if (i2 > r)
    {
        r = i2;
    }

    if (i3 > r)
    {
        r = i3;
    }

    if (i4 > r)
    {
        r = i4;
    }

    return r;
}

int main(int argc, char **argv)
{
    int i1, i2, i3, i4;
    scanf("%i %i %i %i", &i1,  &i2, &i3, &i4);

    printf("%i\n", max_of_four(i1, i2, i3, i4));

    return EXIT_SUCCESS;
}
